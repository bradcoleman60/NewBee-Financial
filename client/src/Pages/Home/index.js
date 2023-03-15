import Image from "./images/learnToinvest.jpeg";

export default function Home() {
    return (
      <section>
        <h1>Welcome!</h1>
        <div className="flex-row">
          <p style={{ flex: 1 }}>
            We're here to help beginner investors better understand some of the
            key metrics that are used to gauge the financial health and, whether
            or not the 'Street' is more 'Bullish' or 'Bearish' about company so
            they can make a more informed decision. Sign up and start your journey
            into the world of investing!!
          </p>
          <img src={Image} alt="invest-graph" style={{ order: 2, width: '50%' }} />
        </div>
      </section>
    );
  }
