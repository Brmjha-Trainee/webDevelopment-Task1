import React from "react";
import {AiFillLike} from "react-icons/ai";
import {AiFillDislike} from "react-icons/ai";
export default function MyPosts(props){
    return(
         <div>
        <div className="Card--format">
        <img className="card--img" src={`./imgs/${props.imageUrl}`} />
            <section className="card--info">
            <div className="card--header">
                <p className="card--title">{props.title} </p> 
                <p className="card--likes"> <AiFillDislike/>{props.dislike} <span>  <AiFillLike/>{props.likeNum}</span></p>
               </div>
                <p className="card--description">{props.description}.... <a href="#">Read More</a></p>
            </section>
      
        </div>
         
        </div>
    )
}