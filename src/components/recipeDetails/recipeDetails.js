import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import backIcon from "../../images/back-arrow.png";
import { mockData } from "../../App";

export default function RecipeDetails(props) {
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
                        <div className="pq-content">
                        {/* <span className="price">₹{data.price}</span> */}
                    </div>
                    </div>
                    <div className="description">
                        <h4>Recipe Instrcutions:</h4>
                        <p>{data.recipe}</p>
                    </div>
                </div> : "something went wrong"}
            </div>
        </div>
    )
}
