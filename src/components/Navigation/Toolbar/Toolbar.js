import classes from './Toolbar.module.css';
import logo from '../../../assets/icons/to-do-list.png';
import Button from '../../UI/Button/Button';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {

    return (
        <header className={classes.Header}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <img className={classes.Logo} src={logo} alt='logo' />
            <span className={classes.Title}>ToDos</span>
            <Button design='toolbar' clicked={props.logout}>Logout</Button>
        </header>
    )
}

export default Toolbar;