import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge} from 'reactstrap';
import classes from './card.module.css';

class ArticleCard extends Component{
    render() {
        return(
            <Card className={classes.card}>
                <CardImg
                top
                width="100%"
                src={this.props.data.image}
                alt="Card image"
                className={classes.cardImage}
                />
                <CardBody className={classes.cardBody}>
                    <CardTitle className={classes.cardTitle}>
                        {this.props.data.title}
                    </CardTitle>
                    <CardSubtitle className={classes.cardSubtitle}>
                        {this.props.data.content}
                    </CardSubtitle>
                </CardBody>
            </Card>
        )
    }
}
export default ArticleCard;