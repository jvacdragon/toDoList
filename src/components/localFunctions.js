export const setItem = (obj) => {
  if (localStorage.getItem("tasks")) {
    const tasks = localStorage.getItem("tasks");
    const tasksJson = JSON.parse(tasks);
    const newTasksArr = [...tasksJson, obj];

    const newTask = JSON.stringify(newTasksArr);

    return localStorage.setItem("tasks", newTask);
  } else {
    const tasks = [obj];
    const tasksString = JSON.stringify(tasks);

    return localStorage.setItem("tasks", tasksString);
  }
};

export const handleDiscardExported = (id, isToDo) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const tasksDone = JSON.parse(localStorage.getItem("done"));

  if (isToDo) {
    const newArr = tasks.filter((item) => item.id !== id);
    const newArrString = JSON.stringify(newArr);

    localStorage.setItem("tasks", newArrString);
  } else {
    const newArr = tasksDone.filter((item) => item.id !== id);

    localStorage.setItem("done", JSON.stringify(newArr));
  }
};

export const setDoneItem = (id) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const tasksDone = JSON.parse(localStorage.getItem("done"));

  if (tasksDone) {
    const newTaskDone = tasks.find((item) => item.id === id);

    const newDoneArr = JSON.stringify([...tasksDone, newTaskDone]);

    localStorage.setItem("done", newDoneArr);
  } else {
    const taskDone = tasks.find((item) => item.id === id);

    const doneArr = JSON.stringify([taskDone]);

    localStorage.setItem("done", doneArr);

    console.log(taskDone);
  }

  handleDiscardExported(id, true);
};
