import React from "react";
class Img extends React.Component {
  render() {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}
export default Img;
