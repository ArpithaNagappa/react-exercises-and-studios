import React from 'react';
import classes from './BookList.module.css';
export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/61O01hAKJ3L._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://photos-us.bazaarvoice.com/photo/2/cGhvdG86YmFybmVzYW5kbm9ibGU/b5054cfc-589a-51e7-94d8-979fcd68f434";
   let book3 = "https://images.squarespace-cdn.com/content/v1/5e720e1b43b5943ba1d32682/1680795106276-0ML2RYQZWHLK5HN1FQ6X/IMG_2454.jpg?format=1000w";

   return (
      <div>
         <h3 className="bookHeading">{pageTitle}</h3>
         <img src={book1} alt="Wings of Fire!" height="250px" width= "100px"/>
         <img src={book2} alt="The London Seance Society by Sarah Penner!"height="250px" width= "100px" />
         <img src={book3} alt="Romantic Comedy by Curtis Sittenfield!" height="250px" width= "100px"/>
      </div>      
   );
}