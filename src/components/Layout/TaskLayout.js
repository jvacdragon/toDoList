const TaskLayout = (props) => {

  const handleDiscard = () => {
    props.handleDiscard(props.dutie.id, props.isToDo);
  };

  const handleDone = () => {
    props.handleDone(props.dutie.id);
  };

  return (
    <li className="bg-gray-300 rounded-md p-4 my-4 ">
      <article className=" ">
        <h2>{props.dutie.taskName}</h2>
        <hr className="w-20 my-2" />
        {props.dutie.taskDescription && (
          <p className="my-4">{props.dutie.taskDescription}</p>
        )}
      </article>

      <div className="flex gap-4 text-center">
        <button onClick={handleDiscard} className="bg-red-500/60  rounded-md">
          Discard
        </button>
        {props.done && (
          <button onClick={handleDone} className="bg-blue-400/60  rounded-md">
            {props.done}
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskLayout;
