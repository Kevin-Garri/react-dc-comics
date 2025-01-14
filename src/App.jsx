import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const links = [
  { id: 1, name: "CHARACTERS", url: "/" },
  { id: 2, name: "COMICS", url: "/" },
  { id: 3, name: "MOVIES", url: "/" },
  { id: 4, name: "TV", url: "/" },
  { id: 5, name: "GAMES", url: "/" },
  { id: 6, name: "COLLECTIBLES", url: "/" },
  { id: 7, name: "VIDEOS", url: "/" },
  { id: 8, name: "FANS", url: "/" },
  { id: 9, name: "NEWS", url: "/" },
  { id: 10, name: "SHOP", url: "/" },
];

const footerShop = [
  { id: 1, url: "#", name: "Shop DC" },
  { id: 2, url: "#", name: "Shop DC Collectibles" },
];

const footerDC = [
  { id: 1, url: "#", name: "Therms Of Use" },
  { id: 2, url: "#", name: "Privacy policy (New)" },
  { id: 3, url: "#", name: "Ad Choices" },
  { id: 4, url: "#", name: "Advertising" },
  { id: 5, url: "#", name: "Jobs" },
  { id: 6, url: "#", name: "Subscriptions" },
  { id: 7, url: "#", name: "Talent Workshops" },
  { id: 8, url: "#", name: "CPSC Certificates" },
  { id: 9, url: "#", name: "Ratings" },
  { id: 10, url: "#", name: "Shop Help" },
  { id: 11, url: "#", name: "Contact Us" },
];

const footerSites = [
  { id: 1, url: "#", name: "DC" },
  { id: 2, url: "#", name: "MAD Magazine" },
  { id: 3, url: "#", name: "DC Kids" },
  { id: 4, url: "#", name: "DC Universe" },
  { id: 5, url: "#", name: "DC Power Visa" },
];


const App = () => {
  return (
    <>
      <Header menu={links} />
      <Main />
      <Footer
        footerShop={footerShop}
        footerDC={footerDC}
        footerSites={footerSites}
        footerComics={links}
      />
    </>
  )
}

export default App