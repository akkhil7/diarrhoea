import React from 'react';
class FlipButton extends React.Component{
  render(){
    return(
      <div className="flipbutton">
          <ul className="tg-list">
            <li className="tg-list-item">
                 <input className="tgl tgl-flip" id="cb5" type="checkbox"/>
              <label className="tgl-btn" data-tg-off="Bad" data-tg-on="Good" htmlFor="cb5"></label>
            </li>
          </ul>
      </div>
    )
  }
}

module.exports = FlipButton;


