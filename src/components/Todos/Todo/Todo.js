import classes from './Todo.module.css';

const Todo = (props) => {

    return (
        <div className={classes.Todo}>
            <div className={classes.TitleContainer}>
                <p>{props.title}</p>
            </div>
            <p className={classes.Description}>{props.desc}</p>
            <div className={classes.ButtonsContainer}>
                <div className={classes.EditButton} onClick={props.editClicked}></div>
                <div className={classes.DeleteButton}></div>
            </div>
        </div>
    );
}

export default Todo;