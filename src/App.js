import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Accueil</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">A Propos</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projets</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    

      <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
              <div className="mx-auto text-center">
                  <h1 className="mx-auto my-0 text-uppercase">OnePage</h1>
                  <h2 className="text-white-50 mx-auto mt-2 mb-5">site web One page avec React App et Bootstrap.</h2>
                  <a className="btn btn-primary js-scroll-trigger" href="#about">Commencer</a>
              </div>
          </div>
      </header>

      <section className="about-section text-center" id="about">

        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2 className="text-white mb-4">Construit avec une Template Bootstrap 4 et React App</h2>
                    <p className="text-white-50">
                        One page est un site web One Page construit par Guei Josue. Avec la template
                        <a href="https://startbootstrap.com/template-overviews/grayscale/"> grayscale </a>
                        de Bootstrap4 et React App, elle est crée pour répondre à l'activité de la piscine de ce weekend.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section className="projects-section bg-light" id="projects">
          <div className="container">
            
              <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                  <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/demo-image-01.jpg" alt="" /></div>
                  <div className="col-xl-4 col-lg-5">
                      <div className="featured-text text-center text-lg-left">
                          <h4>Design</h4>
                          <p className="text-black-50 mb-0">Il nous a été permis de choisir notre propre design pour qu'il ait une diversité de design. Dévélopper notre propre designnous permet d'ajouter notre touche personnelle</p>
                      </div>
                  </div>
              </div>
              
              <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                  <div className="col-lg-6"><img className="img-fluid" src="assets/img/demo-image-02.jpg" alt="" /></div>
                  <div className="col-lg-6">
                      <div className="bg-black text-center h-100 project">
                          <div className="d-flex h-100">
                              <div className="project-text w-100 my-auto text-center text-lg-left">
                                  <h4 className="text-white">Github</h4>
                                  <p className="mb-0 text-white-50">Créer un dépôt 
                                  <a href="https://github.com/JoshuaGuei/react-app"> Github </a>
                                    public pour ce site.
                                  </p>
                                  <hr className="d-none d-lg-block mb-0 ml-0" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="row justify-content-center no-gutters">
                  <div className="col-lg-6"><img className="img-fluid" src="assets/img/heroku.png" alt="" /></div>
                  <div className="col-lg-6 order-lg-first">
                      <div className="bg-black text-center h-100 project">
                          <div className="d-flex h-100">
                              <div className="project-text w-100 my-auto text-center text-lg-right">
                                  <h4 className="text-white">Heroku</h4>
                                  <p className="mb-0 text-white-50">
                                    héberger notre site sur
                                    <a href="https://one-page.herokuapp.com"> Heroku.</a>
                                  </p>
                                  <hr className="d-none d-lg-block mb-0 mr-0" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      

      
      <section className="contact-section">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Addresse</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50">Bingerville, Cité Delacelle</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-envelope text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Email</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50"><a href="#!">gueijosue@gmail.com</a></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-mobile-alt text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Telephone</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50">+225 06-28-06-46</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="social d-flex justify-content-center">
                  <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                  <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
              </div>
          </div>
      </section>
      
      <footer className="footer bg-black small text-center text-white-50"><div className="container">Copyright © Josh Website 2020</div></footer>

    </div>
  );
}

export default App;
