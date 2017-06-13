/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

 //Import react dependencies
 import React from 'react';

 //files manually
 import MenuNav from './MenuNav.react';

 //Class
 class MainPanel extends React.Component {
   //main
   constructor(props) {
     //Call parents
     super(props);
   }

   //Render
   render(){

     //Return app
     return(
       <section className="main-panel container-fluid">
         <MenuNav></MenuNav>

         <div className="col-md-9">
           rest of page
         </div>
       </section>
     );
   }
 }

 //Export default
 export default MainPanel;
