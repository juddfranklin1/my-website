import React from 'react';

const CloseButton = props => (
    <button
      className="close"
      tabIndex={ 0 }
      onClick={(e) => {
        e.preventDefault();
        props.onCloseArticle()
      }}
    >close</button>
);

export default CloseButton;