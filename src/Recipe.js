import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input
  } from 'reactstrap';
import './Recipe.css'

export function Recipe(props){

    const[editMode, setEditMode] = useState(false)
    const[recipe,setRecipe] = useState(props.recipe);
    const{id,name,picture,description}=props.recipe;

    return(
        <div className="Recipe">
            {  !editMode
            ? 
            <Card>
                <Button onClick={()=>props.deleteRecipe && props.deleteRecipe(props.recipe.id)}>Delete</Button>
                <Button onClick={()=>editMode && setEditMode(true)}> Edit </Button>
                <CardBody>
                <CardTitle>{props.recipe.name}</CardTitle>
                <CardImg src={props.recipe.picture}></CardImg>
                <CardText>{props.recipe.description}</CardText>
                </CardBody>
            </Card>
            :
            <Card>
                <Input defaultValue={name} onChange={(event)=> setRecipe({...recipe, name: event.target.value})}></Input>
                <Input defaultValue={picture} onChange={(event)=> setRecipe({...recipe, picture: event.target.value})}></Input>
                <Input defaultValue={description} onChange={(event)=> setRecipe({...recipe, description: event.target.value})}></Input>
                <Button onClick="">Edit</Button>
            </Card>
            }
        </div>
    )
}