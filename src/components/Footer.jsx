

const Footer = () => {
  return (
    <footer>
      <section className="footer_section">
        <div className="container footer_container">
          <div className="footer_list">
            <div>
              <div>
                <span>DC COMICS</span>
                <ul>
                  <li><a href="#">Characters</a></li>
                  <li><a href="#">Comics</a></li>
                  <li><a href="#">Movies</a></li>
                  <li><a href="#">TV</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Videos</a></li>
                  <li><a href="#">News</a></li>
                </ul>
              </div>
              <div className="second_list_footer">
                <span>SHOP</span>
                <ul>
                  <li><a href="#">Shop DC</a></li>
                  <li><a href="#">Shop DC Collectibles</a></li>
                </ul>
              </div>
            </div>
            <div>
              <span>DC</span>
              <ul>
                <li><a href="#">Therms Of Use</a></li>
                <li><a href="#">Privacy policy (New)</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">Talent Workshops</a></li>
                <li><a href="#">CPSC Certificates</a></li>
                <li><a href="#">Ratings</a></li>
                <li><a href="#">Shop Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <span>SITES</span>
              <ul>
                <li><a href="#">DC</a></li>
                <li><a href="#">MAD Magazine</a></li>
                <li><a href="#">DC Kids</a></li>
                <li><a href="#">DC Universe</a></li>
                <li><a href="#">DC Power Visa</a></li>
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