import React from 'react';

function LikeComponent({ like, onClick }) {
  return (
    <>
      <i
        style={{ cursor: 'pointer' }}
        onClick={onClick}
        className={`bi bi-heart${like ? '-fill' : ''}`}
      ></i>
    </>
  );
}

export default LikeComponent;
