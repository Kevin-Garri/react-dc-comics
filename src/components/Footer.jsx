

const Footer = (props) => {
  //array creati su appjsx
  const { footerShop, footerDC, footerSites, footerComics } = props;
  return (
    <footer>
      <section className="footer_section">
        <div className="container footer_container">
          <div className="footer_list">
            <div>
              <div>
                <span>DC COMICS</span>
                <ul>
                  {footerComics.map((link) => (
                    <li key={link.id}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="second_list_footer">
                <span>SHOP</span>
                <ul>
                  {footerShop.map((footerShop) => (
                    <li key={footerShop.id}>
                      <a href={footerShop.url}>{footerShop.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <span>DC</span>
              <ul>
                {footerDC.map((footerDc) => (
                  <li key={footerDc.id}>
                    <a href={footerDc.url}>{footerDc.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span>SITES</span>
              <ul>
                {footerSites.map((footerSites) => (
                  <li key={footerSites.id}>
                    <a href={footerSites.url}>{footerSites.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img src="img/dc-logo-bg.png" alt="" />
          </div>
        </div>

      </section>
      <section className="footer_contacts">
        <div className="container">
          <div>
            <button className="button">SIGN-UP NOW!</button>
          </div>
          <div className="follow_info">
            <span>FOLLOW US</span>
            <ul>
              <li><a href="#"><img src="img/footer-facebook.png" alt="" /></a></li>
              <li><a href="#"><img src="img/footer-twitter.png" alt="" /></a></li>
              <li><a href="#"><img src="img/footer-youtube.png" alt="" /></a></li>
              <li><a href="#"><img src="img/footer-pinterest.png" alt="" /></a></li>
              <li><a href="#"><img src="img/footer-periscope.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}


export default Footer