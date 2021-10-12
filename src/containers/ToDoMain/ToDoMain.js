import { Component } from "react";
import { withRouter } from "react-router";
import { Col, Row } from "react-bootstrap";
import classes from './ToDoMain.module.css';
import Todos from "../../components/Todos/Todos";
import Layout from "../../hoc/Layout/Layout";
import Modal from '../../components/UI/Modal/Modal';
import UpdateTodo from "../../components/Todos/UpdateToDo/UpdateTodo";

class ToDoMain extends Component {
    state = {
        todos: [
            { id: 0, date: new Date(), title: 'todo1', description: 'todo' },
            { id: 1, date: new Date(), title: 'todo2', description: 'todo' },
            { id: 2, date: new Date(), title: 'todo3', description: 'todo' }, { id: 3, date: new Date(), title: 'todo4', description: 'todo' },
            { id: 4, date: new Date(), title: 'todo', description: 'todo' }, { id: 5, date: new Date(), title: 'todo', description: 'todo' }],
        updating: false,
        operation: '',
        selectedTodo: null
    }

    addClickedHandler = () => {
        this.setState({ updating: true, operation: 'add', selectedTodo: null });
    }

    editClickedHandler = (todo) => {
        this.setState({ updating: true, operation: 'edit', selectedTodo: todo });
    }


    cancelHandler = () => {
        this.setState({ updating: false, operation: '', selectedTodo: null });
    }

    addTodo = (data) => {
        const todo = {
            id: this.state.todos.length,
            dateCreated: new Date(),
            title: data['title'].value,
            description: data['description'].value
        };

        if (data['description'].valid) {
            let todos = this.state.todos;
            todos.push(todo);

            this.setState({
                todos: todos,
                updating: false
            })
        }
    } 

    editTodo = (data) => {
        let updatedTodos = [...this.state.todos];
        const index = updatedTodos.findIndex(el => el.id === this.state.selectedTodo.id);
        updatedTodos[index].title = data['title'].value;
        updatedTodos[index].description = data['description'].value;
        this.setState({todos : updatedTodos, updating: false});
    }

    saveToDoHandler = (data) => {
        switch (this.state.operation) {
            case 'add':
                this.addTodo(data);
                break;
            case 'edit':
                this.editTodo(data);
                break;
            default:
                break;
        }
        
    }

    render() {
        return (
            <Layout>
                <Modal show={this.state.updating} modalClosed={this.cancelHandler}>
                    <UpdateTodo
                        operation={this.state.operation}
                        selectedTodo={this.state.selectedTodo}
                        canceled={this.cancelHandler}
                        saved={this.saveToDoHandler}
                    />
                </Modal>
                <Row>
                    <Col md={6} className={classes.CenterContent}>
                        <Todos todos={this.state.todos} addClicked={this.addClickedHandler} editClicked={this.editClickedHandler} /></Col>
                    <Col md={6}>col-1</Col>
                </Row>
            </Layout>
        );
    }
}

export default withRouter(ToDoMain);