import './App.css'

export const Task = (props) => {
    return(
        <div className="listItem">
            <h1 style={{color: props.completed ? "green" : "black"}}>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
            <button onClick={() => props.markTaskComplete(props.id)}>Complete</button>
        </div>
    );
}