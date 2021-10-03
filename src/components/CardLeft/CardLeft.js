import classes from './CardLeft.module.css';
import image from '../../assets/images/image1.svg';
const CardLeft = (props) => (
    <div className={classes.CardLeft}>
        <span>Manage your TV boxes and organize your IPTV assets !</span>
        <img src={image} alt="Girl"/>
    </div>
);

export default CardLeft;