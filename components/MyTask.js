import { BiCheckDouble, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Dropdown } from "@nextui-org/react";

const MyTask = () => {
  return (
    <>
      <div className="w-full inline-flex items-center bg-white leading-none rounded-xl p-2 pl-4 shadow text-teal text-sm group/edit">
        <button className="inline-flex border border-gray-700 text-white rounded-xl h-5 w-5 hover:w-6 hover:h-6 justify-center items-center hover:transition-all hover:duration-300 group/item mr-1">
          <BiCheckDouble className="hidden group-hover/item:block hover:text-xl text-green-500 hover:transition-all hover:duration-500" />
        </button>
        <span className="text-lg inline-flex px-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          dolore.
        </span>

        {/* <button className="ml-auto mr-3"></button> */}

        <Dropdown>
          <Dropdown.Button className="ml-auto"></Dropdown.Button>

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
    </>
  );
};

export default MyTask;
