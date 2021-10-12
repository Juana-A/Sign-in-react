import { Component } from 'react';
import Input from '../../UI/Input/Input';
import classes from './UpdateTodo.module.css';
import Button from '../../UI/Button/Button';

class UpdateTodo extends Component {
    initialState = {
        todoData: {
            title: {
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            description: {
                inputType: 'textArea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    constructor() {
        super();
        this.state = this.initialState;
    }

    componentWillReceiveProps(nextProps) {
        let newData = { ...this.state.todoData };

        if (nextProps.operation === 'edit') {
            const todo = nextProps.selectedTodo;
            newData['title'].value = todo['title'];
            newData['description'].value = todo['description'];
            this.setState({ todoData: newData });
        }
        if (nextProps.operation === 'add') {
            newData['title'].value = '';
            newData['description'].value = '';
            this.setState({ todoData: newData });
        }
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let form = { ...this.state.todoData };

        let updatedElement = { ...form[inputIdentifier] };
        updatedElement.value = event.target.value;

        if (updatedElement.validation) {
            updatedElement.touched = true;
            updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);
        }

        form[inputIdentifier] = updatedElement;

        if (form['description'].valid) {
            this.setState({ formIsValid: true });
        }
        this.setState({ todoData: form });
    }

    resetData = () => {
        this.setState({ ...this.initialState });
    }

    saveProps = () => {
        this.props.saved(this.state.todoData);
    }

    render() {
        const elements = [];
        for (let key in this.state.todoData) {
            elements.push({
                id: key,
                config: this.state.todoData[key]
            });
        }

        return (
            <div className={classes.UpdateTodo}>
                <p className={classes.Title}>Add To Do</p>
                <form>
                    {elements.map(el => (
                        <Input
                            key={el.id}
                            parent='modal'
                            elementType={el.config.inputType}
                            label={el.config.elementConfig.placeholder}
                            elementConfig={el.config.elementConfig}
                            value={el.config.value}
                            changed={(event) => this.inputChangedHandler(event, el.id)}
                            invalid={!el.config.valid}
                            shouldValidate={el.config.validation}
                            touched={el.config.touched} />
                    ))}
                </form>
                <div className={classes.Buttons}>
                    <Button design='modal' clicked={() => { this.props.canceled(); this.resetData(); }}>Cancel</Button>
                    <Button design='modal' clicked={() => { this.saveProps(); this.resetData(); }}>Save</Button>
                </div>
            </div>
        );
    }
}

export default UpdateTodo;