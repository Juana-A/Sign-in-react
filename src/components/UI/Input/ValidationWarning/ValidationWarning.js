import classes from './ValidationWarning.module.css';

const ValidationWarning = (props) => {

    let warningClass = classes.Warning;
    if(!props.show){
        warningClass = classes.Invisible;
    }

    return (
        <p className={warningClass}>{props.children}</p>
    )
}

export default ValidationWarning;