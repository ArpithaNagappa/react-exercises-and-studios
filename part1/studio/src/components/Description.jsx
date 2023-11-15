import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "Mexican Three Bean Salad";
let recipeShortDesc ="This Mexican Three Bean Salad is chock full of veggies, protein-rich beans, and southwest flavor. Enjoy it as a side dish for Taco Night, OR make it the main event by stuffing it into tortillas for a delicious meatless meal!";

function RecipeAuthor(){
    let authorLink = "https://belleofthekitchen.com/mexican-three-bean-salad/";
    let authorPhoto = "https://belleofthekitchen.com/wp-content/uploads/2020/07/headshot2018-e1594836057745-300x300.jpg";
    let authorName= "Ashlyn Edwards";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Belle Of Kitchen</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render(){
        return(
            <div> 
                <div>
                    <h1>{recipeTitle}</h1>
                    <p>{recipeShortDesc}</p>
                </div>
                    <RecipeAuthor />
            </div>
        )
    }
}
export default RecipeDescription;