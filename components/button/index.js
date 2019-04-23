import React from 'react';
import PropTypes from 'prop-types';

import './scss/_button.scss';

//eslint-disable-next-line react/prop-types
export default function Button(props) {
  return (
    <a className={'btn ' + props.type} role="button">
      {props.label}
    </a>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};