import React from 'react';
import mainCSS from "./_main.css"

class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index:0
    }
    this.slideshow = this.slideshow.bind(this);
  }
  
  slideshow(){
    let i = 0;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
    }
    let currentIndex = this.state.index;
    let newIndex = currentIndex + 1;
    this.setState({ index: newIndex});
    if (this.state.index > slides.length -1) { this.setState({ index: 0 }) };
    
    slides[this.state.index].style.display = "block";
    
    setTimeout(this.slideshow, 6000);
  }

  componentDidMount(){
    this.slideshow();
  }

  render() {
    return (
      <div className="main">
        <div className="main-slideshow">
          <div className="slides">
            <img src={require(`./img1.jpg`)}></img>
          </div>
          <div className="slides">
            <img src={require(`./img2.jpg`)}></img>
          </div>
          <div className="slides">
            <img src={require(`./img3.jpg`)}></img>
          </div>
        </div>

        <footer>
          Copyright &copy; 2020 Save The Date
        </footer>
      </div>
    );
  }
}

export default MainPage;