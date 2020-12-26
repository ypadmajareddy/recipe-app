import React from 'react'
import {mockData} from "../../App";
import RecipeCard from "../recipeCard/recipeCard"
export default function dashboard() {
    return (
        mockData.map(recipe=><RecipeCard data={recipe}/>)
    )
}
