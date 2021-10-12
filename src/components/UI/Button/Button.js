import classes from './Button.module.css';
// import { Link } from 'react-router-dom';

const Button = (props) => {

    let buttonClass;
    switch (props.design) {
        case 'login':
            buttonClass = classes.LoginBtn;
            break;
        case 'toolbar':
            buttonClass = classes.ToolbarBtn;
            break;
        case 'modal':
            buttonClass = classes.ModalBtn;
            break;
        default:
            buttonClass = classes.LoginBtn;
    }

    return (
        <button className={buttonClass}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default Button;