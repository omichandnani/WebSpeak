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
    return `<div id="card-${counter}" class="card-trip parentPosition" style="margin: 20px;">
              <span class="badge badge-pill badge-secondary badgePosition">card-${counter}</span>
              <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg">
              <div class="card-trip-infos">
                <div>
                  <h2>Title here</h2>
                </div>
              </div>
            </div>`
  }
  static getText(counter) {
    return `<h4 id="text-${counter}" class="parentPosition">
    <span class="badge badge-pill badge-secondary badgePosition">text-${counter}</span>
    AaBbCc
    </h4>`
  }

  static getEmail(counter) {
    return `<div id="email-${counter}" class="container parentPosition" style="width: 60%; padding: 20px 0px;">
    <span class="badge badge-pill badge-secondary badgePosition">email-${counter}</span>
    <h4 class="text-center">Reach out</h4>
    <form>
        <div class="form-group" >
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div style="display: flex; justify-content: flex-end;">
        <a class="btn btn-primary" style=" color: white;">Send</a>
        </div>
      </form></div>`
  }


  static getContainer(counter) {
    return `<div id="container-${counter}" class="parentPosition" style="height: 300px; width: 100%; padding:20px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center;"><span class="badge badge-pill badge-secondary badgePosition">container-${counter}</span></div>`
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

  static getAboutUs(counter){
    return `<div class="aboutus-area parentPosition" id="about-${counter}" style="background-color: #F6FAFD;">
    <span class="badge badge-pill badge-secondary badgePosition">about-${counter}</span>
    <div class="container">
        <div class="row">
            <div class="col-sm">
            <div class="col-sm ">    
                <div class="aboutus-image float-left hidden-sm"><img src="https://devitems.com/preview/sopnovilla/sopnovilla/img/about/1.jpg" alt=""></div>
                </div>
            <div class="col-sm">
                <div class="aboutus-content ">
                    <h1>About <span>Us</span></h1>
                    <h4>Mission Statement</h4>
                    <p>Think out loud! Speak your thoughts into existence! If you are disabled and want a website; you can have it now!</p>
                    
                </div>
            </div>    
            </div>
        </div>
    </div>
</div>`
  }
   static getComponent(component) {
    switch(component) {
      case "banner" : return Components.getBanner(counter.bannerCounter);
      break;

      case "navigation" : return Components.getNavigation(counter.navigationCounter);
      break;

      case "card" : return Components.getCard(counter.cardCounter);
      break;

      case "text" : return Components.getText(counter.textCounter);
      break;

      case "container" : return Components.getContainer(counter.containerCounter);
      break;

      case "email" : return Components.getEmail(counter.emailCounter);
      break;

      case "footer" : return Components.getFooter(counter.footerCounter);
      break;

      case "about" : return Components.getAboutUs(counter.aboutUsCounter);
      break;
    }

   }
}
