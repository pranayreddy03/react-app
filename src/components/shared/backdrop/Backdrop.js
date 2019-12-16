import React from 'react';

import '../backdrop/Backdrop.css';

const Backdrop = (props) => {
  return  props.show ? <div className="Backdrop" onClick={props.clickedBackdrop}></div> : null
}

export default Backdrop;