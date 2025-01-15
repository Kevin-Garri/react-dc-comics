//import array
import comics from "../data/comics.js";
//import card
import SeriesCard from "./comics/comicsCard.jsx";

const Main = () => {
  return (
    <main>
      <section className="jumbotron">
        <img src="/img/jumbotron.jpg" alt="" />
      </section>
      <section className="content">
        <div className="container content_container">
          <div className="content_title">
            <h3>CURRENT SERIES</h3>
          </div>
          <div className="content_cards">
            <div className="cards_row">

              {comics.map(card => (
                <SeriesCard key={card.id} cardData={card} />
              ))}

            </div>
          </div>
          <button className="button-blue">LOAD MORE</button>
        </div>
      </section>
      <section className="dc_info">
        <div className="row container">
          <div className="column">
            <img src="/img/buy-comics-digital-comics.png" alt="" />
            <p>DIGITAL COMICS</p>
          </div>
          <div className="column">
            <img src="/img/buy-comics-merchandise.png" alt="" />
            <p>DC MERCHANDISE</p>
          </div>
          <div className="column">
            <img src="/img/buy-comics-subscriptions.png" alt="" />
            <p>SUBSCRIPTION</p>
          </div>
          <div className="column">
            <img src="/img/buy-comics-shop-locator.png" alt="" />
            <p>COMIC SHOP LOCATOR</p>
          </div>
          <div className="column">
            <img src="/img/buy-dc-power-visa.svg" alt="" />
            <p>DC POWER VISA</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;