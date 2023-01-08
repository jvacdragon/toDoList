const TaskLayout = ({handleDiscard, dutie, isToDo, handleDone, done}) => {

  const handleDiscardLayout = () => {
    handleDiscard(dutie.id, isToDo);
  };

  const handleDoneL = () => {
    handleDone(dutie.id);
  };

  return (
    <li className="bg-gray-300 rounded-md p-4 my-4 ">
      <article className=" ">
        <h2>{dutie.taskName}</h2>
        <hr className="w-20 my-2" />
        {dutie.taskDescription && (
          <p className="my-4">{dutie.taskDescription}</p>
        )}
      </article>

      <div className="flex gap-4 text-center">
        <button onClick={handleDiscardLayout} className="bg-red-500/60  rounded-md">
          Discard
        </button>
        {done && (
          <button onClick={handleDoneL} className="bg-blue-400/60  rounded-md">
            {done}
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskLayout;
