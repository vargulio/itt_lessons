import React from "react";
import  Card  from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default class MyCard extends React.Component {




    render = () => {
        return <Card style={{ width: '200px' }}>
            <Card.Img width="200"  variant="top" src={this.props.img} />
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    }


}