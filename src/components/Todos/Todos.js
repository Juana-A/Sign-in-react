import { Component } from "react";
import classes from './Todos.module.css';
import Todo from "./Todo/Todo";

class Todos extends Component {

    render() {
        return (
            <div className={classes.Todos}>
                <div className={classes.Title}>
                    <span>To Do</span>
                    <div className={classes.AddButton} onClick={this.props.addClicked}></div>
                </div>
                <div className={classes.Scroll}>
                <div className={classes.TodosList}>
                    {this.props.todos.map(
                        todo => (
                            <Todo 
                            key={todo.id} 
                            title={todo.title} 
                            desc={todo.description}
                            editClicked={() => {this.props.editClicked(todo)}}/>

                        )
                    )}
                </div>
                </div>
               
            </div>
        );
    }
}

export default Todos;