import React, { useState } from 'react';
import {MOCK} from './Mock';
import {Recipe} from './Recipe'
import './Recipes.css'

export function Recipes(props){
    
    const [recipeList, setRecipeList] = useState(MOCK);

    function deleteRecipe(id){
        setRecipeList(recipeList.filter(recipe => recipe.id !== id));
    }
    
    function addRecipe(recipe){
        setRecipeList(recipeList.add(recipe));
    }

    return(
        <div className="Recipes">
        {recipeList.map(recipe => 
            <Recipe recipe={recipe} deleteRecipe={deleteRecipe}></Recipe>
        )}
        </div>
    );
}

export default Recipe;