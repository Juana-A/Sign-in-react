import classes from './Input.module.css';
import ValidationWarning from './ValidationWarning/ValidationWarning';
import HideIcon from './HideIcon/HideIcon';

const Input = (props) => {

    const inputClasses = [classes.Input];
    if (props.parent === 'modal') {
        inputClasses.push(classes.SmallMargin);
    } else {
        inputClasses.push(classes.LargeMargin);
    }

    let validationError = null;
    if (props.error && props.error.showError) {
        inputClasses.push(classes.WithWarning);
        validationError = <ValidationWarning show={props.error.showError}>{props.error.errorMsg}</ValidationWarning>;
    }

    const inputElementClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputElementClasses.push(classes.Invalid);
    }

    let inputElement;
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={inputElementClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case 'textArea':
            inputElement = <textarea
                className={inputElementClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;

        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} />;
            break;
    }

    let icon;
    if (props.label === 'password') {
        if (props.elementConfig.type === 'password') {
            icon = 'hide';
        } else {
            icon = 'show';
        }
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label className={classes.Label}>{props.label}</label>
            <div className={classes.InputContainer}>
                {inputElement}
                {props.label === 'password' ? <HideIcon icon={icon} clicked={props.iconCLick} /> : null}
            </div>
            {validationError}
        </div>

    );
}

export default Input;