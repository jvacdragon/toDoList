import TaskLayout from "./TaskLayout";

const Layout = ({
  title,
  duties,
  isToDo,
  handleDone,
  handleDiscard,
  done,
  undone,
  setUndoneAll,
}) => {
  return (
    <section className="overflow-y-scroll shadow-2xl w-72 h-80 md:w-80 md:h-96 bg-white px-6 rounded-xl pb-6 mx-auto my-12 text-left">
      <h1 className="pt-4 relative">{title}</h1>

      {undone && (
        <button onClick={setUndoneAll} className="bg-blue-400/60  rounded-md">
          {" "}
          Undone all
        </button>
      )}

      <ul className="">
        {duties &&
          duties.map((dutie, i) => (
            <TaskLayout
              handleDone={handleDone}
              isToDo={isToDo}
              key={i}
              handleDiscard={handleDiscard}
              done={done}
              dutie={dutie}
            />
          ))}
      </ul>
    </section>
  );
};

export default Layout;
