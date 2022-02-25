import React from "react";
import profileimg from "../img/Person.png";
import "./Profile.css";
import { BsHeartFill } from "react-icons/bs";
import Router, { Switch, Route } from "crossroad";
import AllPosts from "./PostsCard.js";
//import likedPosts from "./likedPosts";
export default function ProfilePage() {

    const Mypost = () => (<AllPosts />);
    const LikedPost = () => (<main>Here is Liked Posts</main>
    
        );

    return (

        <div className="Profile">
            <div>
                <img className="profile--img" src={profileimg} />
                <h3 className="profile--name">User Name</h3>
                <p className="profile--account">@UserName</p>
                <p className="profile--description">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,<br />  sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua </p>
                <button className="profile--button">Edit Profile</button>

                <Router>
                    <div className="Sections">
                        <a href="/" className="profile--section" >My Posts</a>
                        <a href="./LikedPosts" className="profile--section"><BsHeartFill className="profile--heart" /> </a>
                    </div>

                    <Switch redirect="/">
                        <Route path="/" component={Mypost} />
                        <Route path="/LikedPosts" component={LikedPost} />

                    </Switch>
                </Router>
            </div>
        </div >
    )
}





