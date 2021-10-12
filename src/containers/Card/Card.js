import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Card.module.css';
import CardLeft from "../../components/CardLeft/CardLeft";
import CardRight from "../../components/CardRight/CardRight";
import { withRouter } from "react-router";

class Card extends Component {
    render() {
        return (
            <div className={classes.CardContainer}>
                <Row className={classes.Card}>
                    <Col lg={6} className={classes.NoPadding}><CardLeft/></Col>
                    <Col lg={6} className={classes.NoPadding}><CardRight/></Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(Card);