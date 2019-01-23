import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Button/Button.css';

const Button = (props) => {
  const { type, clickHandler, selection } = props;
  console.log("button props", {props});

  return (
    <div className={`button--${type} container`}>
      <button className={`button--${type} button`} onClick={() => clickHandler(selection)} />
    </div>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
