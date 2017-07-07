import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class DiarySettings extends React.Component{
	constructor() {
    	super()
    		this.state = {
     			exportOption:"JSON",
     			current:"private"
    		}
  	}
  	
  	changeOption(value){
  		this.setState({exportOption: value})
  	}
  	
  	changeDisplay(){
  		if(this.state.current=="private")
  			this.setState({current:"public"});
  		else
  			this.setState({current:"private"});
  	}
	
	render(){
		var exportOption = this.state.exportOption;
		var options = [
  			{ value: 'json', label: 'JSON' },
  			{ value: 'csv', label: 'CSV' }
		];
		if(this.state.current=="public")
			var display="(diary entries can be shared by sharing the link)"
		else
			var display="(diary entries cannot be shared.)"

		return(
			<div>				
					<h1>Diary</h1>
					<div className="diary-settings-form">
						<h2>Remainder Options</h2>
						<input type="checkbox" /><span>Remind daily.</span>
						<p className="instruction">(we will send you an email to write diary daily)</p>
						
						<h2>Private Diary Post</h2>
						<ul className="toggle-button">
						<li className="tg-list-item">
                 			<input className="tgl tgl-ios" id="cb2" type="checkbox" onClick={this.changeDisplay.bind(this)}/>
              				<label className="tgl-btn" data-tg-off="Private" data-tg-on="Public" htmlFor="cb2"></label>
            			</li>
            			</ul>
            			<p className="instruction">{display}</p>
            			<input type="submit" value="Save" className="diary-submit"/>

            			<h2 className="export-heading">Export Options</h2>
            			<Select
 						name="export-options"
 						className="export-options"
  						value={exportOption}
 						options={options}
 						onChange = {this.changeOption.bind(this)}
 						searchable={false}
						/>

						<input type="submit" value="Download" className="export-submit"/>

					</div>
			</div>
		)
	}
}

module.exports = DiarySettings;