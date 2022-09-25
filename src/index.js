import React, { createRef } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MouseTooltip from "react-sticky-mouse-tooltip";
import Item from "./item";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseTooltipVisible: false
    };
    // this.divRef = React.createRef();
  }
  toggleMouseTooltip = () => {
    this.setState(prevState => ({
      isMouseTooltipVisible: !prevState.isMouseTooltipVisible
    }));
  };
  render() {
    const images = [
      {
        url: "assets/img/1.jpg"
      },
      {
        url: "assets/img/2.jpg"
      },
      {
        url: "assets/img/3.jpg"
      },
      {
        url: "assets/img/4.jpg"
      },
      {
        url: "assets/img/5.jpg"
      }
    ];
    return (
      <div>
        <button onClick={this.toggleMouseTooltip}>Toggle mouse tooltip</button>
        <MouseTooltip
          visible={this.state.isMouseTooltipVisible}
          offsetX={15}
          offsetY={10}
          style={{ zIndex: "2", border: "solid gray 1px" }}
        >
          <span>Follow the cursor!</span>
        </MouseTooltip>
        <OwlCarousel
         className="owl-theme"
         center={true}
         loop margin={10}
         nav
         items={2}
         responsive={{
          600:{
              items:4
          }}
    }>
          {images.map((image, i) => (
            <Item url={image.url} key={i} />
          ))}
        </OwlCarousel>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
