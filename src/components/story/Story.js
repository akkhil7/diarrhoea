import React from 'react';
import my_image from './test4.jpg'; 
import Navbar from '../navbar/Navbar';

class Story extends React.Component{
	render(){
		return(
			<div className="story-wrapper">
				<Navbar />
				<div className="left-div">
					<img className="image" src={my_image} />
				</div>
				<div className="right-div">
					<div className="note">
					<h1>TESTING</h1>
					<p>"Like his twisted feathers, his many scars, the reliable old owl chose the gnarled, weather-beaten, but solid branch often—it being a companion to the wise alone with the night and the last branch to creak in the heaviest wind. He often came to survey the fields and the clouds before his hunt, to listen to the steady sound of the stream passing through reeds under the bridge, while combing his feathers for the unwanteds—whatever they might be."
					Here is a descriptive essay about a first visit to a favorite diner written by a student at Roane State Community College:"When entering the door at Lou’s, two things are immediately noticeable: the place is rarely empty and seems to consist of a maze of rooms. The first room, through the door, is the main part of the restaurant. There is another, rarely used, dining room off to the right. It was added during the oil well boom of the seventies. Through the main dining room is yet another room; it guards the door leading into the kitchen. This room contains the most coveted table in the place. The highest tribute Lou can bestow on anyone is to allow them access to seats at this table. This table is the family table; it is reserved for Lou’s, and her daughter Karen’s, immediate family and treasured friends."
					Here is an example of a descriptive essay from St. Cloud State:"Billy Ray's Pawn Shop and Lawn Mower Repair looked like a burial ground for country auction rejects.e middle of the night." Those people picked the wrong kind of park to visit. Not that there was anything wrong with the park: The hikers camped next to them loved the wild isolation of it. But it just wasn't the kind of place the couple from New Jersey had in mind when they decided to camp out on this trip through Florida."
                    Read more at http://examples.yourdictionary.com.</p>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Story;