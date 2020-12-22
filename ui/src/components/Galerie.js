import React, { Component } from "react";
import { fetchImages } from "../actions/imagesActions";
import { connect } from "react-redux";

class Galerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberdisplay: 10,
    };
  }
  componentDidMount() {
    this.props.fetchImages();
  }
  showMore = () => {
    if (this.state.numberdisplay < 50) {
      this.setState({
        numberdisplay: this.state.numberdisplay + 10,
      });
    } else {
      this.setState({
        numberdisplay: 10,
      });
    }
  };

  render() {
    const { images } = this.props;

    const arrayImages = Object.values(images);
    const array = arrayImages.slice(0, this.state.numberdisplay);

    return (
      <div>
        {!array ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>GALLARY</h1>
            <div className="listImage">
              {array.map((el) => (
                <img
                  className="imageStyle"
                  key={el.id}
                  src={el.url}
                  alt={el.title}
                />
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={this.showMore}
                className="btn btn-primary"
              >
                MORE
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect((state) => ({ images: state.images.images }), {
  fetchImages,
})(Galerie);
