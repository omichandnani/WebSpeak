class Components {
  static getBanner(counter) {
    return `<div id="banner-${counter}" class="banner parentPosition" style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(public/img/wave.jpg); height: 70%">
              <span class="badge badge-pill badge-secondary badgePosition">banner-${counter}</span>
              <div class="container" style="height: 100%; width: 100%; display:flex; flex-direction: column; justify-content: center; align-items: center;">
                <h1>Title</h1>
                <p>Description</p>
                <a class="btn btn-success" href="#">Get Started</a>
              </div>
            </div>`
  }

  static getNavigation(counter) {
      return `<nav id="navigation-${counter}" class="navbar navbar-expand-lg parentPosition" style="background-color: #34495e;">
              <span class="badge badge-pill badge-secondary badgePosition" >navigation-${counter}</span>
              <a class="navbar-brand" style="color: white;" href="/">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                </div>
              </div>
            </nav>`
  }

  static getCard(counter) {
    return `<div id="card-${counter}" class="card-trip parentPosition">
              <span class="badge badge-pill badge-secondary badgePosition">card-${counter}</span>
              <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg">
              <div class="card-trip-infos">
                <div>
                  <h2>Title here</h2>
                  <p>Short here!</p>
                </div>
                <h2 class="card-trip-pricing">£99.99</h2>
                <img src='https://kitt.lewagon.com/placeholder/users/krokrob' class="card-trip-user avatar-bordered"/>
              </div>
            </div>`
  }
  static getText(counter) {
    return `<h4 id="text-${counter}" class="parentPosition">
    <span class="badge badge-pill badge-secondary badgePosition">text-${counter}</span>
    AaBbCc
    </h4>`
  }

  static getContainer(counter) {
    return `<div id="container-${counter}" class="parentPosition" style="height: 300px; width: 100%; padding:20px;"><span class="badge badge-pill badge-secondary badgePosition">container-${counter}</span><div class="container"><div class="row" id="content"></div></div></div>`
  }

  static getFooter(counter) {
    return `<div class="footer parentPosition" id="footer-${counter}">
              <span class="badge badge-pill badge-secondary badgePosition">footer-${counter}</span>
              <div class="footer-links">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
              <div class="footer-copyright">
                This footer is made with <i class="fas fa-heart"></i> at EngHack
              </div>
            </div>`;
  }
}
