import React from "react";
import Image from "./images/learnToinvest.jpeg";
import Logo from "./images/newBee.jpg";
import "./style.css";

export default function Home() {

  return (
    <section>
      <h1>New<span>Bee</span> Financial</h1>
      <article>
        <p>
          We're here to help beginner investors better understand some of the
          key metrics that are used to gauge the financial health and, whether
          or not the 'Street' is more 'Bullish' or 'Bearish' about company so
          they can make a more informed decision. Sign up and start your journey
          into the world of investing!!
        </p>
      </article>
      <article>
        <img src={Image} alt="invest-graph" />
      </article>
      <article>
        <h2>Key Features</h2>
        <p>Create an account to track and store company information</p>
        <p>
          
          easily compare the companies you track to begin your financial path
        </p>
        <p>
          we offer many metrics to give a comprehensive understanding to our
          users
        </p>
        <p>
         
          if there are any terms that you do not understand check out our learn
          page
        </p>
        <p>
          we make our education page available to anyone - regardless of their
          subscription status- education is very important to us!
        </p>
      </article>

      <article>
        if you have any questions about our website navigate to the about the
        authors page to learn more and contact us
      </article>

      <img src={Logo} alt="newBee" />

      <p>
        "Someone's sitting in the shade today because someone planted a tree a
        long time ago. Warren Buffet"
      </p>
    </section>
  );
}
