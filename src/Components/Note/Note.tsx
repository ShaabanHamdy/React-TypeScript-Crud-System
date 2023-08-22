import { ChangeEvent, useRef, useState } from "react";
import { ITask } from "../InterFace";
import TodoTask from "./TodoTask";
const Note = () => {
  // =================================================================================
  const taskValue = useRef<any>();
  const deadlineValue = useRef<any>();
  const btn = useRef<any>();
  // =============================================================================
  const [disabled, setDisabled] = useState<boolean>(true);
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<any>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  // ============================================================
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "nameTask") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
    if (event.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // ==================================================================================
  const addTask = (todoValue: any): void => {
    if (btn.current.innerHTML === "Update Task") {
      todoValue[0].taskName = taskValue.current.value;
      todoValue[0].deadline = deadlineValue.current.value;
      deadlineValue.current.value = "";
      taskValue.current.value = "";
      btn.current.innerHTML = "Add Task";
      setTodoList([...todoList]);
    } else {
      const newITask = { taskName: task, deadline: deadline };
      setTodoList([...todoList, newITask]);
      deadlineValue.current.value = "";
      taskValue.current.value = "";
    }
    setDisabled(true);
  };

  // =============================================================

  const clickDeleteTask = (taskNameToDoList: string) => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDoList;
      })
    );
  };
  // =====================================================================================
  const editTask = (index: any) => {
    deadlineValue.current.value = index.deadline;
    taskValue.current.value = index.taskName;
    btn.current.innerHTML = "Update Task";
    setDisabled(false);
  };

  return (
    <>
      <div className="container">
        <div className="row gy-3 my-5">
          <h1 className=" text-center text-light">
            To Do List With TypeScript
          </h1>
          <div className="col-md-12">
            <div className="inputDev m-auto  my-4">
              <input
                className=" form-control"
                placeholder="Task..."
                ref={taskValue}
                type="text"
                name="nameTask"
                onChange={handleChange}
              />

              <input
                className="my-2 form-control"
                placeholder="0"
                type="number"
                ref={deadlineValue}
                name="deadline"
                onChange={handleChange}
              />
              <button
                disabled={disabled}
                onClick={() => addTask(todoList)}
                ref={btn}
                className="btn btn-info my-2 float-end"
              >
                Add Task
              </button>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask
              key={key}
              task={task}
              clickDeleteTask={clickDeleteTask}
              editTask={editTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default Note;
