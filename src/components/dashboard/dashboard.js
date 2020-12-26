import React from 'react'
import {mockData} from "../../mockData";
import RecipeCard from "../recipeCard/recipeCard"
export default function dashboard() {
    return (
        mockData.map(recipe=><RecipeCard data={recipe}/>)
    )
}
