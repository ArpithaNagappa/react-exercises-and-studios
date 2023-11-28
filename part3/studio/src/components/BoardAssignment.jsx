import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label:"New Recipes to try",
         value : "newRecipes"
      },
      {
         label:"Desserts",
         value : "desserts"
      },
      {
         label:"Potluck Possibilities",
         value : "potluckPossibilities"
      }

   ];
   let broadOptions = broad.map((broad, index) => {
      return <option key = {index} value ={broad.value}>{broad.value}</option>
   })

   const handleChange = (event) => {
      SetBroadName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
