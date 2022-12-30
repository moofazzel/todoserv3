import { BiPlus } from "react-icons/bi";

const AddTask = () => {
  const addTast = (e) => {
    e.preventDefault();
    const from = e.target;
    const task = from.task.value;
    console.log(task);

    const taskData = {
      task: task,
      status: false,
      image: "photoURL",
    };

    console.log(taskData);

    fetch("http://localhost:5000/add_task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.acknowledged) {
        //   toast.success("Successfully Added!");
        // }
      });
  };
  return (
    <>
      <div className="container mt-16">
        <form
          onSubmit={addTast}
          className="flex items-center md:w-[70%] md:mx-auto "
        >
          <div className="group relative transition-all w-full">
            <input
              name="task"
              type="text"
              className="group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Task"
            />
            <BiPlus className="text-gray-400 text-3xl absolute top-[8px] left-3" />

            <label
              title="Upload Image"
              for="dropzone-file"
              className="cursor-pointer group-hover:flex hidden absolute items-center top-2 right-5 transition-all"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-w-8 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTask;
