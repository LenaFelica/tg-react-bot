import React, { useEffect } from 'react';
import './Button.css';


const Button = (props) => {
   return (
      <button {...props} className={'button ' + props.className}/>
   )
}

export default Button;