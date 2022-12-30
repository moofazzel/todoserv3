import { BiCheckDouble, BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Dropdown } from "@nextui-org/react";
import MyTask from "../components/MyTask";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/all_tasks");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const my_task = () => {
  return (
    <>
      <div className="container pt-20">
        <div className="md:w-[90%] mx-auto mb-3 ">
          <MyTask />
        </div>
      </div>
    </>
  );
};

export default my_task;
