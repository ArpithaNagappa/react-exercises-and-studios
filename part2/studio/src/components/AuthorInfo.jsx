function AuthorInfo() {
  const recipeAuthor =recipedata.map(recipe =>{
    return <div key ={recipe.name}>{recopeAuthor}</div>
  });
  const recipeAuthorImage = recipedata .map(recipe =>{
return(
  <div key ={recipe.name}>
    <img src ={recipe.authorImage} alt ={recipe.author}
    className="authorImage"/>
    </div>
)
})
const recipeWebsite = recipedata.map(recipe =>{
  return <a key = {recipeAuthor.name} href = {recipe.website}>
    View Recipe on Website
  </a>
})
return(
  <div>
    {recipeAuthorImage}
    {recipeAuthor}
    {recipeWebsite}
  </div>
);
}
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 