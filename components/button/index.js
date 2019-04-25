import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) =>{
  return (
    <a className={'btn ' + props.type} role="button">
      {props.children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Button;
