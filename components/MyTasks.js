import { BiCheckDouble, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

import { Dropdown } from "@nextui-org/react";

const MyTasks = ({ tasks }) => {
  const { task, _id } = tasks;

  const deleteTask = async (taskID) => {
    fetch(`http://localhost:5000/task/${taskID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="md:w-[90%] mx-auto mb-3 ">
        <div className="w-full inline-flex items-center bg-white leading-none rounded-full p-2 pl-4 shadow text-teal text-sm group/edit">
          <button className="inline-flex border border-gray-700 text-white rounded-full h-5 w-5 hover:w-6 hover:h-6 justify-center items-center hover:transition-all hover:duration-300 group/item mr-1">
            <BiCheckDouble className="hidden group-hover/item:block hover:text-xl text-green-500 hover:transition-all hover:duration-500" />
          </button>
          <span className="text-lg inline-flex px-2 text-gray-700">{task}</span>

          {/* <button className="ml-auto mr-3"></button> */}

          <Dropdown className="ml-20">
            <Dropdown.Button
              css={{
                borderRadius: "$xs",
                border: "$space$1 solid transparent",
                background: "$pink800",
                color: "$purple600",
                "&:hover": {
                  color: "$blue600",
                  color: "$blue600",
                },
              }}
              className="ml-auto"
            ></Dropdown.Button>

            <Dropdown.Menu aria-label="Actions" variant="light">
              <Dropdown.Item key="edit">
                <span className="flex items-center">
                  <BiEditAlt /> Edit
                </span>
              </Dropdown.Item>
              <Dropdown.Item key="delete" color="error">
                <span
                  onClick={() => deleteTask(_id)}
                  className="flex items-center"
                >
                  <AiOutlineDelete /> Delete
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default MyTasks;
