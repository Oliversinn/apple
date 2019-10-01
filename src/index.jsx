import React from "react";
import ReactDOM from "react-dom";
import "./estilos.css";

class App extends React.Component {

    render(){
        return (
            <div>
                <NavBar/>
                <Banners/>
                <Cuadricula/>
                <Footer/>
                
            </div>
        )
    }
}

class NavBar extends React.Component {
    
    render(){

      return (
        <div id="navbar">
            <div></div>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/mac/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/ipad/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/iphone/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/watch/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/tv/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/music/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/links/support/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"></img>
            <img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"></img>
        </div>
      )
    }
}

class Banners extends React.Component {

    render(){
        return (
            <div id="banners">
                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/heroes/iphone-11-pro/hero__dvsxv8smkkgi_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <h1 className="iphonex">iPhone 11 Pro</h1>
                        <h2 className="iphonex">Pro cameras. Pro display. Pro performance.</h2>
                        <h3 className="iphonex">From $24.95/mo. or $599 with trade-in.*</h3>
                        <a className="x-learn">Learn more ></a>
                        <a className="x-buy">Buy ></a>
                    </div>
                </div>
                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/heroes/iphone-11/hero__dvsxv8smkkgi_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <h1 className="iphone11">iPhone 11</h1>
                        <h2 className="iphone11">Just the amount of everything.</h2>
                        <h3 className="iphone11">From $16.62/mo. or $399 with trade-in.*</h3>
                        <a className="learn11">Learn more ></a>
                        <a className="buy11">Buy ></a>
                    </div>
                </div>
                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/heroes/watch-series-5/hero__dvsxv8smkkgi_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <img className="watch" src="https://www.apple.com/v/home/ep/images/logos/watch-series-5/logo_hero__trsrpeu6koqy_large_2x.png"></img>
                        <div className="watch-text1">With the new Always-On Retina display.</div>
                        <div className="watch-text2">You've never seen a watch like this.</div>
                        <a className="learn1">Learn more ></a>
                        <a className="buy1">Buy ></a>
                    </div>
                </div>
                <div></div>            
            </div>
        )
    }
}

class Cuadricula extends React.Component {

    render(){
        return (
            <div id="cuadricula">
                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/promos/apple-watch-studio/tile__cauwwcyyn9hy_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <h1 className="cuad-watch">Apple Watch studio</h1>
                        <h2 className="cuad-watch">Any case. Any band. Any style you want.</h2>
                        <a className="cuad-watch">Create your style ></a>
                    </div>
                </div>
                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/promos/ipad/tile__cauwwcyyn9hy_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <img className="ipad" src="https://www.apple.com/v/home/ep/images/logos/ipad/logo_tile__ex0pdbqxuuuu_medium_2x.png"></img>
                        <h2 className="ipad">Like a computer. Unlike any computer.</h2>
                        <a className="ipad-learn">Learn more ></a>
                        <a className="ipad-buy">Buy ></a>
                    </div>
                </div>
                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/promos/tv-plus-helpsters/tile__cauwwcyyn9hy_small_2x.jpg"></img>
                    <div className="textcontainer">
                        <img className="tv" src="https://www.apple.com/v/home/ep/images/logos/tv-plus-helpsters/logo__dcojfwkzna2q_small_2x.png"></img>
                        <img className="tv1" src="https://www.apple.com/v/home/ep/images/logos/tv-plus-helpsters/helpsters_logo__dap8f6esbaoi_small_2x.png"></img>
                        <a className="tv">Watch the trailer</a>
                    </div>
                </div>

                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/promos/apple-card/tile__cauwwcyyn9hy_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <img className="card" src="https://www.apple.com/v/home/ep/images/logos/apple-card/tile__cauwwcyyn9hy_small_2x.png"></img>
                        <h2 className="card">Get 3% Daily Cash on purchases from Apple</h2>
                        <h2 className="card1">using Apple Card.</h2>
                        <a className="card-learn">Learn more ></a>
                        <a className="card-buy">Buy ></a>
                    </div>
                </div>
                
                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/promos/apple-arcade-avail/tile__cauwwcyyn9hy_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <img className="arcade" src="https://www.apple.com/v/home/ep/images/logos/apple-arcade-avail/logo_tile__ex0pdbqxuuuu_medium_2x.png"></img>
                        <h2 className="arcade">Play extraordinary.</h2>
                        <h2 className="arcade1">Find it on the App Store.**</h2>
                        <a className="arcade-learn">Learn more ></a>
                    </div>
                </div>

                <div className="container">
                    <img className="fondo" src="https://www.apple.com/v/home/ep/images/promos/apple-books-oprah/tile__cauwwcyyn9hy_large_2x.jpg"></img>
                    <div className="textcontainer">
                        <h1 className="oprah">Apple and Oprah.</h1>
                        <h1 className="oprah1">Read with us.</h1>
                        <a className="oprah">Learn more ></a>
                        <img className="oprah" src="https://www.apple.com/v/home/ep/images/logos/apple-books-oprah/logo_tile__ex0pdbqxuuuu_medium_2x.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}

class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer>
                    <div className="footer">
                        <section>
                            <ul>
                                <li>
                                    * Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 
                                    Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability 
                                    and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In 
                                    transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law 
                                    may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or 
                                    Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month 
                                    installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon.
                                </li>
                                <li>
                                    ** Apple Arcade and Apple TV+ require a subscription. Apple Arcade is now available on iPhone, iPad, and Apple TV and will be available on Mac this fall.
                                </li>
                                <li>
                                    Case and band combinations can be made within collections (Apple Watch, Apple Watch Nike, and Apple Watch Hermès) only.
                                </li>
                            </ul>
                        </section>
                        <nav>
                            <div className="footer-flex">
                                <ul>
                                <h3>Shop and Learn</h3>
                                    <li>
                                    <a href="#">Mac</a>
                                    </li>
                                    <li>
                                    <a href="#">iPad</a>
                                    </li>
                                    <li>
                                    <a href="#">iPhone</a>
                                    </li>
                                    <li>
                                    <a href="#">Watch</a>
                                    </li>
                                    <li>
                                    <a href="#">TV</a>
                                    </li>
                                    <li>
                                    <a href="#">Music</a>
                                    </li>
                                    <li>
                                    <a href="#">AirPods</a>
                                    </li>
                                    <li>
                                    <a href="#">HomePod</a>
                                    </li>
                                    <li>
                                    <a href="#">iPod touch</a>
                                    </li>
                                    <li>
                                    <a href="#">Accessories</a>
                                    </li>
                                    <li>
                                    <a href="#">Gift Cards</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-flex">
                                <ul>
                                    <h3>Services</h3>
                                    <li>
                                    <a href="#">Apple Music</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple News+</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple TV+</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple Arcade</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple Card</a>
                                    </li>
                                    <li>
                                    <a href="#">iCloud</a>
                                    </li>
                                    <h3>Account</h3>
                                    <li>
                                    <a href="#">Manage your apple ID</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple Store Account</a>
                                    </li>  
                                </ul>
                            </div>
                            <div className="footer-flex">
                                <ul>
                                    <h3>Apple Store</h3>
                                    <li>
                                    <a href="#">Find a Store</a>
                                    </li>
                                    <li>
                                    <a href="#">Genius Bar</a>
                                    </li>
                                    <li>
                                    <a href="#">Today at Apple</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple Camp</a>
                                    </li>
                                    <li>
                                    <a href="#">Field Trip</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple Store App</a>
                                    </li>
                                    <li>
                                    <a href="#">Refurbished and Clearance</a>
                                    </li>
                                    <li>
                                    <a href="#">Financing</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple Trade In</a>
                                    </li>
                                    <li>
                                    <a href="#">Order Status</a>
                                    </li>
                                    <li>
                                    <a href="#">Shopping Help</a>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="footer-flex">
                                <ul>
                                    <h3>For Business</h3>
                                    <li>
                                    <a href="#">Apple and Business</a>
                                    </li>
                                    <li>
                                    <a href="#">Shop for Business</a>
                                    </li>
                                    <h3>For Education</h3>
                                    <li>
                                    <a href="#">Apple and Education</a>
                                    </li>
                                    <li>
                                    <a href="#">Shop for College</a>
                                    </li>
                                    <h3>For Healthcare</h3>
                                    <li>
                                    <a href="#">Apple in Healthcare</a>
                                    </li>
                                    <li>
                                    <a href="#">Health on Apple Watch</a>
                                    </li>
                                    <li>
                                    <a href="#">Health Record on iPhone</a>
                                    </li>
                                    <h3>For Government</h3>
                                    <li>
                                    <a href="#">Shop for Government</a>
                                    </li>
                                    <li>
                                    <a href="#">Shop for Veterans and Military</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="footer-flex">
                                <ul>
                                    <h3>Apple Values</h3>
                                    <li>
                                    <a href="#">Accessibility</a>
                                    </li>
                                    <li>
                                    <a href="#">Education</a>
                                    </li>
                                    <li>
                                    <a href="#">Environment</a>
                                    </li>
                                    <li>
                                    <a href="#">Inclusion and Diversity</a>
                                    </li>
                                    <li>
                                    <a href="#">Privacy</a>
                                    </li>
                                    <li>
                                    <a href="#">Supplier Responsability</a>
                                    </li>
                                    <h3>About Apple</h3>
                                    <li>
                                    <a href="#">Newsroom</a>
                                    </li>
                                    <li>
                                    <a href="#">Apple Leadership</a>
                                    </li>
                                    <li>
                                    <a href="#">Job Opportunities</a>
                                    </li>
                                    <li>
                                    <a href="#">Investors</a>
                                    </li>
                                    <li>
                                    <a href="#">Events</a>
                                    </li>
                                    <li>
                                    <a href="#">Contact Apple</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </nav>
                        <section className="tienda">
                            <div className="shop">
                                More ways to shop: <a>Find an Apple Store</a> or <a>other retailer</a> near you. Or call 1-800-MY-APPLE.
                            </div>
                            <div className="ultima">
                                <div className="copyright">
                                    Copyright © 2019 Apple Inc. All rights reserved.
                                </div>
                                <div className="ultimo1">
                                        <a className="ultimo1">Privacy Policy</a>
                                        <a className="ultimo1">Terms of Use</a>
                                        <a className="ultimo1">Sales and Refunds</a>
                                        <a className="ultimo1">Legal</a>
                                        <a className="ultimo1">Site Map</a>
                                </div>
                                <div className="ultimo2">
                                    <img className="usa" src="https://www.apple.com/ac/flags/1/images/us/32.png"></img>
                <a className="usa">
                                        United States
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
                

            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
    );
