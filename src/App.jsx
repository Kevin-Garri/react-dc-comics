import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { footerShop, footerDC, footerSites } from "./data/footerLinks.js";
import links from "./data/menu.js";

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