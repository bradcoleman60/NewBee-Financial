import React from "react";
import Image from "./images/learnToinvest.jpeg";
import Logo from "./images/newBee.jpg";
import "./style.css";

export default function Home() {

  return (
    <section>
      <div className="title">
      <h1>New<span className="bee">Bee</span> Financial</h1>
      </div>
      <article>
      <h2>Mission</h2>
        <p>We're here to help beginner investors better understand some of the key metrics that are used to gauge the financial health and, whether or not the 'Street' is more 'Bullish' or 'Bearish' about company so they can make a more informed decision. Sign up and start your journey into the world of investing!!</p>
        
      </article>
      <article>
        <img src={Image} alt="invest-graph" />
      </article>
      <article>
        <h2>Key Features</h2>
        <ul>
        <li>Create an account to track and store company information</li>
        <li>easily compare the companies you track to begin your financial path</li>
        <li>we offer many metrics to give a comprehensive understanding to our users</li>
        <li>if there are any terms that you do not understand check out our learn page</li>
        <li>we make our education page available to anyone - regardless of their subscription status- education is very important to us!</li>
        </ul>
      </article>

      <article>
       <p>if you have any questions about our website navigate to the about the authors page to learn more and contact us</p>
      </article>
      <article>
      <img src={Logo} alt="newBee" />
</article>
<article>
      <p>"Someone's sitting in the shade today because someone planted a tree a long time ago. Warren Buffet"</p>
</article>
    </section>
  );
}
