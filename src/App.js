import logo from './logo.svg';
import './App.css';


function App() {
  return (
        <><div className="top-bar d-none d-md-block">
          <div className="container-fluid">
              {/*<!-- Nav Bar --> */}
              {/* <!-- Top Bar Start--> */}
              <div className="row">
                  <div className="col-md-6">
                      <div className="top-bar-left">
                          <div className="text">
                              <h2>8:00 - 9:00</h2>
                              <p>Opening Hour Mon - Fri</p>
                          </div>
                          <div className="text">
                              <h2>+123 456 7890</h2>
                              <p>Call Us For Appointment</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="top-bar-right">
                          <div className="social">
                              <a href=""><i className="fab fa-twitter"></i></a>
                              <a href=""><i className="fab fa-facebook-f"></i></a>
                              <a href=""><i className="fab fa-linkedin-in"></i></a>
                              <a href=""><i className="fab fa-instagram"></i></a>
                              {/*<!--  Top Bar End -->*/}
                          </div>
                          {/*<!--  Top Bar End -->*/}
                      </div>
                      {/*<!--  Top Bar End -->*/}
                  </div>
                  {/*<!--  Top Bar End -->*/}
              </div>
              {/*<!--  Top Bar End -->*/}
          </div>
          {/*<!--  Top Bar End -->*/}
      </div><div className="navbar navbar-expand-lg bg-dark navbar-dark">

              <div className="container-fluid">
                  <a href="index.html" className="navbar-brand">Barber <span>X</span></a>
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                      <div className="navbar-nav ml-auto">
                          <a href="index.html" className="nav-item nav-link active">Home</a>
                          <a href="about.html" className="nav-item nav-link">About</a>
                          <a href="service.html" className="nav-item nav-link">Service</a>
                          <a href="price.html" className="nav-item nav-link">Price</a>
                          <a href="team.html" className="nav-item nav-link">Barber</a>
                          <a href="portfolio.html" className="nav-item nav-link">Gallery</a>
                          <div className="nav-item dropdown">
                              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                              <div className="dropdown-menu">
                                  <a href="blog.html" className="dropdown-item">Blog Page</a>
                                  <a href="single.html" className="dropdown-item">Single Page</a>
                              </div>
                          </div>
                          <a href="contact.html" className="nav-item nav-link">Contact</a>
                      </div>
                  </div>
              </div>
{/*<!-- Nav Bar End --> */}
          </div>

{/*<!-- Hero Start -->*/}
<div className="hero">
    {/*<!-- Hero Start -->*/}
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className="hero-text">
                    <h1>HTML5 Template for Salon Website</h1>
                    <p>
                        Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                    </p>
                    <a className="btn" href="https://htmlcodex.com/barber-shop-template">Download Now</a>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
                <div className="hero-image">
                    <img src="img/hero.png" alt="Hero Image"/>
                </div>
            </div>
        </div>
        <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
            <span></span>
        </button>
    </div>
{/*<!-- Hero End -->*/},  
</div>


{/*<!-- Video Modal Start-->*/}
<div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>        
               {/*<!-- 16:9 aspect ratio -->*/}
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </div>
    
</div> 
{/*<!-- Video Modal End -->*/}


{/*<!-- About Start -->*/}
<div className="about">

    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
                <div className="about-img">
                    <img src="img/about.jpg" alt="Image"/>
                </div>
            </div>
            <div className="col-lg-7 col-md-6">
                <div className="section-header text-left">
                    <p>Learn About Us</p>
                    <h2>25 Years Experience</h2>
                </div>
                <div className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                    </p>
                    <a className="btn" href="">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    
</div>
{/*<!-- About End -->*/}



{/*<!-- Service Start -->*/}
<div className="service">
    <div className="container">
        <div className="section-header text-center">
            <p>Our Salon Services</p>
            <h2>Best Salon and Barber Services for You</h2>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="service-img">
                        <img src="img/service-1.jpg" alt="Image"/>
                    </div>
                    <h3>Hair Cut</h3>
                    <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                    </p>
                    <a className="btn" href="">Learn More</a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="service-img">
                        <img src="img/service-2.jpg" alt="Image"/>
                    </div>
                    <h3>Beard Style</h3>
                    <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                    </p>
                    <a className="btn" href="">Learn More</a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item">
                    <div className="service-img">
                        <img src="img/service-3.jpg" alt="Image"/>
                    </div>
                    <h3>Color & Wash</h3>
                    <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                    </p>
                    <a className="btn" href="">Learn More</a>
                </div>
            </div>
        </div>
    </div>    
</div>
{/*<!-- Service End -->


{/*<!-- Pricing Start -->*/}
<div className="price">

    <div className="container">
        <div className="section-header text-center">
            <p>Our Best Pricing</p>
            <h2>We Provide Best Price in the City</h2>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-1.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Hair Cut</h2>
                        <h3>$9.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-2.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Hair Wash</h2>
                        <h3>$10.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-3.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Hair Color</h2>
                        <h3>$11.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-4.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Hair Shave</h2>
                        <h3>$12.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-5.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Hair Straight</h2>
                        <h3>$13.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-6.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Facial</h2>
                        <h3>$14.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-7.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Shampoo</h2>
                        <h3>$15.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-8.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Beard Trim</h2>
                        <h3>$16.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-9.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Beard Shave</h2>
                        <h3>$17.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-10.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Wedding Cut</h2>
                        <h3>$18.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-11.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Clean Up</h2>
                        <h3>$19.99</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="price-item">
                    <div className="price-img">
                        <img src="img/price-12.jpg" alt="Image"/>
                    </div>
                    <div className="price-text">
                        <h2>Massage</h2>
                        <h3>$20.99</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
{/*<!-- Pricing End -->*/}



{/*<!-- Testimonial Start -->*/}
<div className="testimonial">

    <div className="container">
        <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item">
                <img src="img/testimonial-1.jpg" alt="Image"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat. Fusce venenatis at lectus in malesuada. Suspendisse sit amet dolor et odio varius mattis.
                </p>
                <h2>Client Name</h2>
                <h3>Profession</h3>
            </div>
            <div className="testimonial-item">
                <img src="img/testimonial-2.jpg" alt="Image"/>
                <p>
                    Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus tortor. Aliquam vehicula molestie pulvinar. Sed varius libero in leo finibus, ac consectetur tortor rutrum.
                </p>
                <h2>Client Name</h2>
                <h3>Profession</h3>
            </div>
            <div className="testimonial-item">
                <img src="img/testimonial-3.jpg" alt="Image"/>
                <p>
                    Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna non enim luctus interdum. Phasellus sed eleifend erat. Aliquam ligula ex, semper vel tempor pellentesque, pretium eu nulla.
                </p>
                <h2>Client Name</h2>
                <h3>Profession</h3>
            </div>
        </div>
    </div>
   
</div>
{/*<!-- Testimonial End -->*/}



{/*<!-- Team Start -->
<div className="team">

    <div className="container">*/}
        <div className="section-header text-center">
            <p>Our Barber Team</p>
            <h2>Meet Our Hair Cut Expert Barber</h2>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="team-item">
                    <div className="team-img">
                        <img src="img/team-1.jpg" alt="Team Image"/>
                    </div>
                    <div className="team-text">
                        <h2>Adam Phillips</h2>
                        <p>Master Barber</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="team-item">
                    <div className="team-img">
                        <img src="img/team-2.jpg" alt="Team Image"/>
                    </div>
                    <div className="team-text">
                        <h2>Dylan Adams</h2>
                        <p>Hair Expert</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="team-item">
                    <div className="team-img">
                        <img src="img/team-3.jpg" alt="Team Image"/>
                    </div>
                    <div className="team-text">
                        <h2>Gloria Edwards</h2>
                        <p>Beard Expert</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="team-item">
                    <div className="team-img">
                        <img src="img/team-4.jpg" alt="Team Image"/>
                    </div>
                    <div className="team-text">
                        <h2>Josh Dunn</h2>
                        <p>Color Expert</p>
                    </div>
                </div>
            </div>
        </div>
    <div>  
</div>
{/*<!-- Team End -->*/}




<div className="contact">
{/*<!-- Contact Start -->*/}
    <div className="container-fluid">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>
{/*<!-- Contact End -->*/}



{/*<!-- Blog Start -->*/}
<div className="blog">

    <div className="container">
        <div className="section-header text-center">
            <p>Latest From Blog</p>
            <h2>Learn More from Latest Barber Blog</h2>
        </div>
        <div className="owl-carousel blog-carousel">
            <div className="blog-item">
                <div className="blog-img">
                    <img src="img/blog-1.jpg" alt="Blog"/>
                </div>
                <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Hair Cut</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div className="blog-item">
                <div className="blog-img">
                    <img src="img/blog-2.jpg" alt="Blog"/>
                </div>
                <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Beard Style</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div className="blog-item">
                <div className="blog-img">
                    <img src="img/blog-3.jpg" alt="Blog"/>
                </div>
                <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Color & Wash</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div className="blog-item">
                <div className="blog-img">
                    <img src="img/blog-4.jpg" alt="Blog"/>
                </div>
                <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Hair Cut</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div className="blog-item">
                <div className="blog-img">
                    <img src="img/blog-5.jpg" alt="Blog"/>
                </div>
                <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Beard Style</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div className="blog-item">
                <div className="blog-img">
                    <img src="img/blog-6.jpg" alt="Blog"/>
                </div>
                <div className="blog-meta">
                    <i className="fa fa-list-alt"></i>
                    <a href="">Color & Wash</a>
                    <i className="fa fa-calendar-alt"></i>
                    <p>01-Jan-2045</p>
                </div>
                <div className="blog-text">
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                {/*<!-- Blog End -->*/},
                </div>
            </div>
        </div>
    </div> 
</div>
 
        );
}
export default App;