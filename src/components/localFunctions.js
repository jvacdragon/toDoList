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

/* export const setDoneItem = (obj) => {
    const tasksToDo = JSON.parse(localStorage.getItem("tasks"))

    const taskDone = tasksToDo.find((item) => item.id === id);
} */
