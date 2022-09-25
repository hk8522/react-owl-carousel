import React, { createRef } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MouseTooltip from "react-sticky-mouse-tooltip";

class Item extends React.Component {
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
    return (
      <div class="item" key={this.props.url}>
        <img
          src={this.props.url}
          onMouseEnter={this.toggleMouseTooltip}
          onMouseLeave={this.toggleMouseTooltip}
        />
        <MouseTooltip
          visible={this.state.isMouseTooltipVisible}
          offsetX={15}
          offsetY={10}
          style={{ zIndex: "2", border: "solid gray 1px" }}
        >
          <span>Follow the cursor!</span>
        </MouseTooltip>
      </div>
    );
  }
}

export default Item;
