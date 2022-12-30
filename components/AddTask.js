import { createRef, useContext, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { AuthContext } from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imageHostKey = "121434ed25072b618fb998af7dda3f59";

  const handleAddTask = (data, e) => {
    const email = user?.email || "unregistered";
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    console.log(data);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // data
          const task = {
            task: data.task,
            email,
            image: imgData.data.url,
          };
          console.log(task);
          // save all task data to database
          fetch(`http://localhost:5000/add_task`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(task),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);

              toast.success(`Your Task is added successfully`);
              // navigate('/dashboard/manageDoctors')
              e.target.reset();
            });
        }
      });
  };

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="pt-16 container ">
          <div className="w-full md:max-w-4xl mx-auto p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 darkk:bg-gray-800 darkk:border-gray-700 shadow-xl">
            <form onSubmit={handleSubmit(handleAddTask)}>
              <div className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 darkk:text-white text-center">
                  Add Your Task
                </h5>

                <label
                  for="website-admin"
                  className="block mb-2 text-sm font-medium text-gray-900 darkk:text-white"
                ></label>
                <div className="flex">
                  <input
                    type="text"
                    {...register("task", { required: true })}
                    id="website-admin"
                    className=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500 shadow-lg"
                    placeholder="+ add task"
                  />
                  {errors.task && (
                    <span>
                      <small className="text-red-600">name is required</small>
                    </span>
                  )}
                </div>

                <div className=" rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500">
                  <input
                    type="file"
                    {...register("image")}
                    className=" rounded-lg shadow-lg"
                  />
                  {errors.image && (
                    <span>
                      <small className="text-red-600">Image is required</small>
                    </span>
                  )}
                </div>

                <input
                  type="submit"
                  value="Add"
                  className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darkk:bg-blue-600 darkk:hover:bg-indigo-800 darkk:focus:ring-blue-800"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
