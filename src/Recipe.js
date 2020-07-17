import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {MOCK} from './Mock';

export function Recipe(props){
    return(
        <div className="Recipe">
        {MOCK.map(element => 
            <Card>
            <CardBody>
            <CardTitle>{element.name}</CardTitle>
            <CardImg top width="20%" src={element.picture} alt="Card image cap"/>
            <CardText>{element.description}</CardText>
            </CardBody>
            </Card>    
        )};
        </div>
    );
}

export default Recipe;