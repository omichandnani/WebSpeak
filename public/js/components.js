class Components {
  static getBanner(counter) {
    return `<div id="banner-${counter}" class="banner" style="background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(public/img/wave.jpg); height: 70%">
              <div class="container" style="height: 100%; width: 100%; display:flex; flex-direction: column; justify-content: center; align-items: center;">
                <h1>Title</h1>
                <p>Description</p>
                <a class="btn btn-success" href="#">Get Started</a>
              </div>
            </div>`
  }

  static getNavigation(counter) {
      return `<nav id="navigation-${counter}" class="navbar navbar-expand-lg" style="background-color: #34495e;">
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
    return `<div id="card-${counter}" class="card-trip">
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
      return `<h4 id="card-${counter}">AaBbCc</h4>`
  }

  static getEmail(counter) {
    return `<div class="container" style="width: 60%;"><form>
  <div class="form-group" id="email-${counter}">
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
    return `<div id="container-${counter}" style="height: 300px; width: 100%; padding:20px;"><div class="container"><div class="row" id="content"></div></div></div>` 
  }

   static getComponent(component) {
    switch(component) {
      case "banner" : return Components.getBanner(counter.bannerCounter);
      break;

      case "navigation" : return Components.getBanner(counter.navigationCounter);
      break;

      case "card" : return Components.getBanner(counter.cardCounter);
      break;

      case "text" : return Components.getText(counter.textCounter);
      break;

      case "container" : return Components.getContainer(counter.containerCounter);
      break;

    }

   }
}