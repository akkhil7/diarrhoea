import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar';
class Memory extends React.Component{
  render(){
    return(
      <div className="memory-wrapper">
        <Navbar isLight={true} />
        <TopBar title="MEMORIES" />
        <div className="memory-container">
          <ul className="tg-list">
            <li className="tg-list-item">
                 <input className="tgl tgl-flip" id="cb5" type="checkbox"/>
              <label className="tgl-btn" data-tg-off="Bad Memories" data-tg-on="Good Memories" htmlFor="cb5"></label>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = Memory;

