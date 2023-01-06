import { useEffect, useState } from "react";
import TaskLayout from "./TaskLayout";

const Layout = (props) => {
  const [duties, setDuties] = useState();
  
  useEffect(() => {
    if (props.duties) return setDuties(props.duties);
  }, [props.duties]);

  return (
    <section className="overflow-y-scroll shadow-2xl w-72 h-80 md:w-80 md:h-96 bg-white px-6 rounded-xl pb-6 mx-auto my-12 text-left">
      <h1 className="pt-4 relative">{props.title}</h1>

      <ul className="">
        {duties &&
          duties.map((dutie, i) => (
            <TaskLayout
              handleDone={props.handleDone}
              isToDo={props.isToDo}
              key={i}
              handleDiscard={props.handleDiscard}
              done={props.done}
              dutie={dutie}
            />
          ))}
      </ul>
    </section>
  );
};

export default Layout;
