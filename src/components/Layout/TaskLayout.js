const TaskLayout = (props) => {
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
                  <button className="bg-red-500/60  rounded-md">Discard</button>
                  {props.next && (
                    <button
                      onClick={props.print}
                      className="bg-blue-400/60  rounded-md"
                    >
                      {props.next}
                    </button>
                  )}
                </div>
              </li>
    )
}

export default TaskLayout;