import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h3>{this.props.hasWatermark}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.weight}</h3>
      </div>
    )
  }

}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, attribute) => {

    const weight = props[attribute];
    
    if (weight === undefined) {
          return new Error('The `weight` prop is required.');
        }

        if (isNaN(weight)) {
          return new Error('The `weight` prop is not a number.');
        }

        const isValidWeight = weight > 80 && weight < 300;

        if (!isValidWeight) {
          return new Error('The `weight` prop should range between 80 and 300.');
        }
      }
   //
   //  console.log(typeof(props[attribute]));
   //  if (!(props[attribute] > 80 && props[attribute] < 300)){
   //    return new Error(
   //       'Wrong.'
   //     );
   // }

};

export default Product;
