import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import backIcon from "../../images/back-arrow.png";
import { mockData } from "../../mockData";

export default function RecipeDetails() {
    const { id } = useParams();    
    const [data, setdata] = useState("");
    useEffect(() => {
        setdata(mockData.find(item => item.id == id))

    }, [data])
    return (
        <div className="details">
            <div class="card">
                {data ? <div class="recipe-details">
                    <div class="top-content">
                        <img class="top-icons" src={backIcon} alt="" onClick={() => window.history.back()} />
                        <h3>{data.name}</h3>
                    </div>
                    <div className="ing-content">
                        <img src={data.rImg} alt="" className="recipe-img"></img>
                        <span><i class="fas fa-fire"></i> {data.cals}</span>                       
                    </div>
                    <div className="instructions">
                        <h4>Recipe Instrcutions:</h4>
                        <p>{data.recipeInstructions.map((item,i)=>(
                            <div><h4>Step {i+1} {item.title}</h4>
                            <div>{item.desc}</div></div>
                        ))}</p>
                    </div>
                </div> : "something went wrong"}
            </div>
        </div>
    )
}
