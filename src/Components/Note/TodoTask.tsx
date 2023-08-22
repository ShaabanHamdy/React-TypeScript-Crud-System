import { ITask } from "../InterFace";
import "./Note.modules.css";
type Props = {
  task: ITask;
  clickDeleteTask(taskNameToDoList: string): void;
  editTask(index: any): void;
  // editTaskDone(index: any): void;
};

const TodoTask = ({ task, clickDeleteTask ,editTask}: Props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-7   m-auto">
          <div className=" colorTask">
            <div>
              <p className=" TaskNAME">{task.taskName}</p>
            </div>
            <div className=" border border-dark rounded-2 p-1">
              {task.deadline}
            </div>
            <div>
              <i 
              onClick={()=>{editTask(task)}}
              className="fas fa-pen-to-square fs-5 text-warning mx-2"></i>
              <i
                onClick={() => {
                  clickDeleteTask(task.taskName);
                }}
               
                className="fas fa-trash-can text-danger  mx-2"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
