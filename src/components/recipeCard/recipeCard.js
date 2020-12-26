import React from 'react';
import { Link} from "react-router-dom";

export default function recipeCard({ data: { name, rImg,id,description } }) {
    return (
        <section>
            <Link to={`/recipe/${id}`} >
            <div className="face">
                <div className="ing-content">
                    <h3>{name}</h3>
                    <img src={rImg} alt="" className="overview"></img>                    
                </div>
                <div className="description">
                    <h4>Description</h4>
                    <p>{description}</p>
                </div>
            </div>
            </Link>
        </section>
    )
}
