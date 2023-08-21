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
        <div className="col-md-8   m-auto">
          <div className=" colorTask">
            <div>
              <p className=" TaskNAME">{task.taskName}</p>
            </div>
            <div className=" border border-dark rounded-2 p-2">
              {task.deadline}
            </div>
            <div>
              <i 
              onClick={()=>{editTask(task)}}
              className="fas fa-pen  mx-2"></i>
              <i
                onClick={() => {
                  clickDeleteTask(task.taskName);
                }}
               
                className="fas fa-trash-can  mx-2"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
