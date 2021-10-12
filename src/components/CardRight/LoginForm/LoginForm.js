import { Component } from "react";
import classes from './LoginForm.module.css';
import Button from '../../UI/Button/Button';
import Input from "../../UI/Input/Input";
import { withRouter } from "react-router";

class LoginForm extends Component {
    state = {
        loginForm: {
            email: {
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    validEmail: true
                },
                valid: false,
                error: {
                    showError: false,
                    errorMsg: 'You have entered an invalid e-mail address. Please try again.'
                },
                touched: false
            },
            password: {
                inputType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    hasUpperCase: true,
                    hasLowerCase: true,
                    hasNumber: true,
                    hasSymbol: true
                },
                valid: false,
                error: {
                    showError: false,
                    errorMsg: 'Password must have at least 8 characters that includes:\n at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character.'
                },
                show: false,
                touched: false
            }
        },
        formIsValid: false,
    }

    signupHandler = (event) => {
        event.preventDefault();
        const account = {};
        for (let formElementIdentifier in this.state.loginForm) {
            const updatedForm = {
                ...this.state.loginForm
            };
            const updatedFormElement = {
                ...updatedForm[formElementIdentifier]
            };

            if (this.state.loginForm[formElementIdentifier].valid) {
                updatedFormElement.error.showError = false;
                account[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
            } else {
                updatedFormElement.error.showError = true;
            }

            updatedForm[formElementIdentifier] = updatedFormElement;
            this.setState({ loginForm: updatedForm });
        }

        if (this.state.formIsValid) {
            const queryParams=[];
            for(let i in account){
                queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(account[i]));
            }
           
            const queryString =  queryParams.join('&');
            this.props.history.push({
                pathname : "/todo",
                search: "?" + queryString
            });
        }
    }

    hasLowerCase(str) {
        return str.toUpperCase() !== str;
    }

    hasUpperCase(str) {
        return str.toLowerCase() !== str;
    }

    hasNumber(str) {
        return /\d/.test(str);
    }

    hasSpecialChar(str) {
        var format = /[!@#$%^&*()_+\-={};':"|,.<>/?]+/;
        return format.test(str);
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.validEmail) {
            isValid = this.validateEmail(value) && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.hasUpperCase) {
            isValid = this.hasUpperCase(value) && isValid;
        }

        if (rules.hasLowerCase) {
            isValid = this.hasLowerCase(value) && isValid;
        }

        if (rules.hasNumber) {
            isValid = this.hasNumber(value) && isValid;
        }

        if (rules.hasSymbol) {
            isValid = this.hasSpecialChar(value) && isValid;
        }

        return isValid;
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.error.showError = false;

        if (updatedFormElement.validation) {
            updatedFormElement.touched = true;
            updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        }

        updatedForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ loginForm: updatedForm, formIsValid: formIsValid });
    }



    render() {
        const iconClickHanlder = () => {
            const updatedForm = {
                ...this.state.loginForm
            };
            const password = { ...this.state.loginForm['password'] };

            if (password.show) {
                password.elementConfig.type = 'password';
                password.show = false;
            } else {
                password.elementConfig.type = 'text';
                password.show = true;
            }

            updatedForm['password'] = password;

            this.setState({ loginForm: updatedForm });
        }

        const elements = [];
        for (let key in this.state.loginForm) {
            elements.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        return (
            <form onSubmit={this.signupHandler} className={classes.LoginForm}>
                {elements.map(element => (
                    <Input
                        key={element.id}
                        parent='cardright'
                        elementType={element.config.inputType}
                        label={element.id}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        changed={(event) => this.inputChangedHandler(event, element.id)}
                        invalid={!element.config.valid}
                        shouldValidate={element.config.validation}
                        touched={element.config.touched}
                        error={element.config.error}
                        iconCLick={iconClickHanlder} />
                ))}
                <Button design="login">Sign In</Button>
            </form>
        );
    }
}

export default withRouter(LoginForm);