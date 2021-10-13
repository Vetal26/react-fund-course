/* eslint-disable react/prop-types */
import React from 'react';
import classes from './MyInput.module.css';

// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} className={classes.myInput} />
));

export default MyInput;
