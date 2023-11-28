import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.ambitiouskitchen.com/";
   let authorPhoto = "https://www.ambitiouskitchen.com/brown-butter-chocolate-chip-cookies/";
   let authorName = "Monique Volz";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      'Flour', 'Sugar', 'Egg','Chocolate Chips','Brown Butter'
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1> Brown Butter Chocolate Chip Cookies</h1>
            <p>World famous brown butter chocolate chip cookies made with dark brown sugar, two types of chocolate chips and a sprinkle of sea salt. </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.ambitiouskitchen.com/wp-content/uploads/2016/10/AK-Brown-Butter-CCCs-2-750x750.jpg" alt="ChocolateChip Cookies"
       className="imageUpdates" height="450px" width="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
