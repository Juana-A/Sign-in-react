import classes from './HideIcon.module.css';
import hideIcon from '../../../../assets/icons/invisible.svg';
import showIcon from '../../../../assets/icons/view.svg';

const HideIcon = (props) => {

    return (
        <div>
            {props.icon === 'hide' ? <img className={classes.Icon} src={hideIcon} alt='eye-icon' onClick={props.clicked} />
            : <img className={classes.Icon} src={showIcon} alt='eye-icon' onClick={props.clicked} />} 
            
        </div>
    )
}

export default HideIcon;