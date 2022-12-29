import { BiCheckDouble, BiEditAlt } from "react-icons/bi";

const MyTasks = ({ tasks }) => {
  const { task } = tasks;

  return (
    <>
      <div className="md:w-[90%] mx-auto mb-3 ">
        <div className="w-full inline-flex items-center bg-white leading-none rounded-full p-2 pl-4 shadow text-teal text-sm group/edit">
          <button className="inline-flex border border-gray-700 text-white rounded-full h-5 w-5 hover:w-6 hover:h-6 justify-center items-center hover:transition-all hover:duration-300 group/item mr-1">
            <BiCheckDouble className="hidden group-hover/item:block hover:text-xl text-green-500 hover:transition-all hover:duration-500" />
          </button>
          <span className="text-lg inline-flex px-2 text-gray-700">{task}</span>

          {/* <button className="ml-auto mr-3"></button> */}
        </div>
      </div>
    </>
  );
};

export default MyTasks;
