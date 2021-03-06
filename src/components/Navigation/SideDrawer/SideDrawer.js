import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                {/* <div className={classes.Logo}>
                    <Logo />
                </div> */}

                <nav>
                    {/* <NavigationItems /> */}
                </nav>

            </div>
        </Aux>
    );
};

export default SideDrawer;