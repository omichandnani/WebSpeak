class Counters {
  constructor() {
    this.navigationCounter = 1;
    this.cardCounter = 1;
    this.bannerCounter = 1;
    this.textCounter = 1;
    this.containerCounter = 1;
    this.emailCounter = 1;
    this.footerCounter = 1;
    this.aboutUsCounter = 1;
  }

  getCounter(component) {
    switch(component) {
      case "navigation":
        return `${this.navigationCounter}`;
      case "banner":
          return `${this.bannerCounter}`;
      case "card":
        // code block
        return `${this.cardCounter}`;
      case "text":
        return `${this.textCounter}`;
      case "container":
        return `${this.containerCounter}`;
      case "email" :
        return `${this.emailCounter}`;
      case "footer":
        return `${this.footerCounter}`;
      case "about" :
        return `${this.aboutUsCounter}`;
      default:
        // code block
        return false
        break;
    }
  }

  updateCounter(component) {
    switch(component) {
      case "navigation":
        this.navigationCounter++;
        break;
      case "banner":
          this.bannerCounter++;
          break;
      case "card":
        // code block
        this.cardCounter++;
        break;
      case "text":
        this.textCounter++;
        break;
      case "container":
        this.containerCounter++;
        break;
      case "email" :
        this.emailCounter++;
        break;
      case "footer":
        this.footerCounter++;
        break;
      case "about" :
        this.aboutUsCounter++;
        break;
      default:
        // code block
        return false
        break;
    }
  }
}
var counter = new Counters();
