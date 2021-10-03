import classes from './Input.module.css';
import ValidationWarning from './ValidationWarning/ValidationWarning';
import HideIcon from './HideIcon/HideIcon';

const Input = (props) => {

    const inputClasses = [classes.Input];

    if(props.error.showError){
        inputClasses.push(classes.WithWarning);
    }

    const inputElementClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputElementClasses.push(classes.Invalid);
    }

    
    
    let icon;
    if(props.label === 'password'){
        if(props.elementConfig.type === 'password'){
            icon = 'hide';
        } else {
            icon = 'show';
        }
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label className={classes.Label}>{props.label}</label>
            <div className={classes.InputContainer}>
            <input
                className={inputElementClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            {props.label === 'password' ? <HideIcon icon={icon} clicked={props.iconCLick}/> : null}
            </div>           
            <ValidationWarning show={props.error.showError}>{props.error.errorMsg}</ValidationWarning>
        </div>

    );
}

export default Input;