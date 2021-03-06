import { Component } from "react";
import { withRouter } from "react-router";
import classes from './CardRight.module.css';
import LoginForm from './LoginForm/LoginForm';

class CardRight extends Component {
    render() {
        return (
            <div className={classes.CardRight}>
                <span>Welcome to O.room</span>
                <LoginForm />
            </div>

        );
    }
}

export default withRouter(CardRight);