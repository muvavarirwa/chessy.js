import React from 'react';

function Square(props) {
  const { className, id } = props;

  return (
    <React.Fragment>
      <div className={className} id={`piece_${id}`}></div>
    </React.Fragment>
  );
}

export default Square;
