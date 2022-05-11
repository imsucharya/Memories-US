import React from 'react';
import logo from './2022.png';

const Title = () => {
  return (
    <div className="title">
      <img src={logo} alt="memories" height="500px" width="450px" className="logo"/>
      <h2>Good Memories</h2>
      <p>Memory is the treasury & guardian of all the things.</p>
    </div>
  )
}

export default Title;