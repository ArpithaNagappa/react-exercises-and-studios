import React from 'react';
import classes from './HobbyList.module.css';

export default function HobbyLinks() {
    let hobby1 ="https://www.goodreads.com/";
    let hobby2 ="https://www.ravelry.com/";
    return(
        <div>
        <h3 className="hobbyHeading">My Hobbies</h3>
        <p className= "hobbyText">
        <a href = {hobby1} > Good Reads</a>
        </p>
        <p className= "hobbyText">
        <a href = {hobby2}>Ravelry</a>
        </p>
        </div>
    )
}