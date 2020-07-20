import React, { useState, useEffect } from 'react';
import { MOCK } from './Mock';
import { Recipe } from './Recipe'
import './Recipes.css'
import './Recipe.css'
import useAxios from 'axios-hooks';

export const baseURL = "http://10.0.1.156:8080/api/v1"

export function Recipes(props) {

    const [{ data, loading, error }] = useAxios("http://10.0.1.156:8080/api/v1/recipes");

    const [{ data: dataEdit }, executeEdit] = useAxios(
        {
            url: `${baseURL}/recipes`,
            method: "PUT"
        },
        { manual: true }
    );

    const [{data : dataDelete}, executeDelete] = useAxios(
        {
            url: `${baseURL}/recipes`,
            method: "DELETE"
        },
        { manual: true}
    )

    const [recipeList, setRecipeList] = useState(data || MOCK);
    const [addMode, setAddMode] = useState(false);

    useEffect(() => setRecipeList(data), [data, dataEdit])

    function deleteRecipe(id) {
        setRecipeList(recipeList.filter(recipe => recipe.id !== id));
        
    }

    function updateRecipe(recipe){
        setRecipeList(recipeList.map(old => old.id===recipe.id ? recipe : old))
        executeEdit({data:recipe});
    }

    function addRecipe(recipe) {
        setRecipeList(recipeList.add(recipe));
    }

    return (
        <div className="Recipes">
            {recipeList && recipeList.map(recipe =>
                <Recipe recipe={recipe} deleteRecipe={deleteRecipe} updateRecipe={updateRecipe}></Recipe>
            )}
        </div>
    );
}

export default Recipe;