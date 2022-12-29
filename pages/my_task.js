import MyTasks from "../components/MyTasks";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/all_tasks");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const my_task = ({ data }) => {
  return (
    <div>
      <div className="container pt-20">
        {data.map((t) => (
          <MyTasks key={t._id} tasks={t} />
        ))}

        <h1>my task</h1>
      </div>
    </div>
  );
};

export default my_task;
