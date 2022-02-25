import React from "react";
import dataframe from "./postsData.js";
import Myposts from "./MyPosts.js";
import "./Profile.css";
export default function PostsCard() {
    const cards = dataframe.map(item => {
        return (<Myposts
            key={item.id}{...item}
        />
        
        )
    }
    )
    return (

        <section className="cards-list">
            {cards}
           
        </section> 
   
    );
}