

import React from "react";
import Image from "./images/learnToinvest.jpeg";
import Logo from "./images/newBee.jpg";
import './style.css';


export default function Home() {
   // return (
   //   <section>
   //     <h1><strong>NewBee Financial</strong></h1>
   //     <div className="flex-row">
   //       <p style={{ flex: 1, }}>
   //         We're here to help beginner investors better understand some of the
   //         key metrics that are used to gauge the financial health and, whether
   //         or not the 'Street' is more 'Bullish' or 'Bearish' about company so
   //         they can make a more informed decision. Sign up and start your journey
   //         into the world of investing!!
   //       </p>
   //       <img src={Image} alt="invest-graph" style={{ order: 2, width: '50%' }} />
   //       <img src={Logo} alt="newBee" style={{ order: 2, width: '50%' }} />
   //       <p>"Someone's sitting in the shade today because someone planted a tree a long time ago.
   //         Warren Buffet"</p>
   //     </div>
   //   </section>
   // );
   return (
     <section>
       <h1><strong>NewBee Financial</strong></h1>
       <div className="flex-row">
         <div className="flex-row-item">
           <p>
             We're here to help beginner investors better understand some of the
             key metrics that are used to gauge the financial health and, whether
             or not the 'Street' is more 'Bullish' or 'Bearish' about company so
             they can make a more informed decision. Sign up and start your journey
             into the world of investing!!
           </p>
           <img src={Image} alt="invest-graph" />
         </div>
         {/* <div className="flex-row-item">
           <img src={Logo} alt="newBee" />
         </div> */}
       </div>
       <div className="flex-row">
         <div className="flex-row-item">
           <img src={Logo} alt="newBee" />
         </div>
         <div className="flex-row-item">
           <p>
             "Someone's sitting in the shade today because someone planted a tree a long time ago.
             Warren Buffet"
           </p>
         </div>
       </div>
     </section>
   );
 }



