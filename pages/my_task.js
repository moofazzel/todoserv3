import { BiCheckDouble, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Dropdown } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// const { user } = useContext(AuthContext);

const my_task = () => {
  const {
    data: allTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all_tasks");
      const data = await res.json();
      return data;
    },
  });

  const deleteTask = async (taskID) => {
    fetch(`http://localhost:5000/task/${taskID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      })
      .catch((err) => console.log(err));
  };

  const handleComplete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/task/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const incompleteTasks = allTasks.filter(
    (incoTask) => incoTask.status === false
  );

  console.log("inocmplete", incompleteTasks);

  return (
    <>
      <div className="container pt-20">
        <div className="md:w-[90%] mx-auto mb-3 ">
          {incompleteTasks.map((task) => (
            <div className="w-full inline-flex items-center bg-white leading-none rounded-xl p-2 pl-4 shadow text-teal text-sm group/edit mb-5">
              <PhotoProvider>
                <PhotoView src={task?.image}>
                  <img
                    src={task?.image}
                    className="h-32 mr-3 rounded-lg"
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>

              <span className="text-lg inline-flex px-2 text-gray-700">
                {task?.task}
              </span>

              {/* <button className="ml-auto mr-3"></button> */}

              <div className="ml-auto flex items-center gap-5 mx-5">
                <button
                  onClick={() => handleComplete(task?._id)}
                  className="inline-flex border border-gray-700 text-white rounded-xl h-10 w-10 hover:w-10 hover:h-10 justify-center items-center hover:transition-all hover:duration-300 group/item mr-1"
                >
                  <BiCheckDouble className="hidden group-hover/item:block hover:text-[30px] text-blue-500 hover:transition-all hover:duration-300" />
                </button>
                <Dropdown>
                  <Dropdown.Button></Dropdown.Button>

                  <Dropdown.Menu aria-label="Actions" variant="light">
                    <Dropdown.Item key="edit">
                      <span className="flex items-center">
                        <BiEditAlt /> Edit
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item key="delete" color="error">
                      <span
                        onClick={() => deleteTask(task._id)}
                        className="flex items-center"
                      >
                        <AiOutlineDelete /> Delete
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default my_task;
