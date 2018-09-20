//importing in the necessary items
import React from 'react';
import Nav from './components/nav';

//creating the page with default photos
const Home = props => {

  return(
    <div>
        <Nav />
        <div className="header-img">
          <h1>Miss_Pylons</h1>
          <h1>Programmer | Gamer</h1>
        </div>
        <div className="about-section">
          <h2>ABOUT</h2>
          <img src="#" alt="Miss_Pylons Headshot"/>
          <p>Marzipan lemon drops cheesecake. Brownie sugar plum ice cream oat cake candy tart cake jelly. Topping brownie pie gummi bears jelly beans pudding candy canes wafer apple pie. Brownie powder danish jelly tootsie roll cupcake candy canes chocolate cake biscuit. Candy canes oat cake marshmallow chocolate cake candy tootsie roll pie. Chocolate liquorice ice cream cake pudding. Jujubes pie macaroon cake. Tiramisu bonbon lollipop biscuit dessert gummies croissant. Lemon drops jujubes icing marshmallow gummi bears muffin. Jujubes powder candy canes. Bonbon pastry gummi bears. Muffin halvah sweet roll jelly-o muffin. Oat cake muffin carrot cake cheesecake toffee liquorice powder fruitcake pudding. Ice cream marzipan chocolate bar muffin pie macaroon powder.</p>
          <p>Biscuit cheesecake bear claw gingerbread gummies. Sweet roll gingerbread marzipan oat cake chupa chups chocolate bar dragée. Ice cream soufflé halvah cookie lemon drops ice cream. Jelly-o marshmallow jujubes dessert. Tootsie roll ice cream icing tart sweet bear claw brownie cake. Pudding chocolate bar muffin soufflé liquorice. Marshmallow biscuit wafer ice cream cookie cheesecake. Halvah gummies muffin muffin powder chocolate bar macaroon jelly. Dessert caramels cupcake apple pie topping jujubes. Soufflé icing biscuit halvah powder wafer icing. Marzipan soufflé chocolate cake topping powder muffin oat cake chocolate bar cake. Dragée apple pie jujubes tiramisu toffee. Pudding danish halvah jelly topping.</p>
        </div>
        <div className="schedule-section">
          <h2>SCHEDULE</h2>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg align-self-center">
                <h3>M</h3>
                <p>6:30pm</p>
              </div>
              <div className="col-lg align-self-center">
                <h3>T</h3>
                <p>6:30pm</p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg align-self-center">
                <h3>W</h3>
                <p>6:30pm</p>
              </div>
              <div className="col-lg align-self-center">
                <h3>TH</h3>
                <p>6:30pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="social-section">
          <h2>SOCIAL</h2>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg align-self-center">
                <i className="fab fa-twitch"></i>
                <a href="http://www.twitch.tv/miss_pylons">Twitch.tv/Miss_pylons</a>
              </div>
              <div className="col-lg align-self-center">
                <i className="fab fa-github"></i>
                <a href="http://www.github.com/missmeg">GitHub.com/MissMeg</a>
              </div>
              <div className="col-lg align-self-center">
                <i className="fab fa-twitter"></i>
                <a href="http://www.twitter.com/miss_pylons">Twitter.com/Miss_Pylons</a>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg align-self-center">
                <i className="fab fa-instagram"></i>
                <a href="http://www.instagram.com/miss_pylons">Instagram.com/Miss_pylons</a>
              </div>
              <div className="col-lg align-self-center">
                <i className="fab fa-youtube"></i>
                <a href="https://www.youtube.com/channel/UCmTCbUM6vd0njjNQG8JKurQ">YouTube Channel</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <p>contact section</p>
        </div>
    </div>
  );
}

export default Home;
