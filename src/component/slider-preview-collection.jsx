import React from 'react';
import './slider-preview-collection.css';
import images from './slider-images';
class SliderPreviewCollection extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      picActive: 0,
      mainPic: images['shoe1.jpg'],
    };
  }

  handleRightClick = () => {
    return this.scroller.current
      ? (this.scroller.current.scrollLeft += 180)
      : null;
  };

  handleLeftClick = () => {
    return this.scroller.current
      ? (this.scroller.current.scrollLeft -= 180)
      : null;
  };

  setPicActive = (num, pic) => {
    this.setState({ picActive: num });
    this.setState({ mainPic: pic });
  };

  render() {
    const { picActive, mainPic } = this.state;
    return (
      <div id='content-wrapper'>
        <div className='column'>
          <img id='featured' alt='slide-img' src={mainPic} />

          <div id='slide-wrapper'>
            <img
              id='slideLeft'
              alt='slide-img'
              className='arrow'
              src={images['arrow-left.png']}
              onClick={() => {
                this.handleLeftClick();
              }}
            />

            <div id='slider' ref={this.scroller}>
              <img
                className={`thumbnail ${picActive === 0 ? 'active' : ''}`}
                alt='slide-img'
                src={images['shoe1.jpg']}
                onClick={() => {
                  this.setPicActive(0, images['shoe1.jpg']);
                }}
              />
              <img
                className={`thumbnail ${picActive === 1 ? 'active' : ''}`}
                alt='slide-img'
                src={images['shoe2.jpg']}
                onClick={() => {
                  this.setPicActive(1, images['shoe2.jpg']);
                }}
              />
              <img
                className={`thumbnail ${picActive === 2 ? 'active' : ''}`}
                alt='slide-img'
                src={images['shoe3.jpg']}
                onClick={() => {
                  this.setPicActive(2, images['shoe3.jpg']);
                }}
              />

              <img
                className={`thumbnail ${picActive === 3 ? 'active' : ''}`}
                alt='slide-img'
                src={images['preset1.png']}
                onClick={() => {
                  this.setPicActive(3, images['preset1.png']);
                }}
              />
              <img
                className={`thumbnail ${picActive === 4 ? 'active' : ''}`}
                alt='slide-img'
                src={images['preset2.jpg']}
                onClick={() => {
                  this.setPicActive(4, images['preset2.jpg']);
                }}
              />
              <img
                className={`thumbnail ${picActive === 5 ? 'active' : ''}`}
                alt='slide-img'
                src={images['preset3.JPG']}
                onClick={() => {
                  this.setPicActive(5, images['preset3.JPG']);
                }}
              />
              <img
                className={`thumbnail ${picActive === 6 ? 'active' : ''}`}
                alt='slide-img'
                src={images['preset4.JPG']}
                onClick={() => {
                  this.setPicActive(6, images['preset4.JPG']);
                }}
              />
            </div>

            <img
              id='slideRight'
              className='arrow'
              alt='slide-img'
              src={images['arrow-right.png']}
              onClick={() => this.handleRightClick()}
            />
          </div>
        </div>

        <div className='column'>
          <h1>Awesome Shoes</h1>
          <hr />
          <h3>$89.99</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <input
            value='1'
            type='number'
            onChange={() => console.log('do some thing')}
          />
          <a className='btn btn-dark' href='/#'>
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}

export default SliderPreviewCollection;
