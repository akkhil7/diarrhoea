import React from 'react';
import Calendar from '../calendar/Calendar.js';
import Navbar from '../navbar/Navbar.js';
import TopBar from '../navbar/TopBar.js';
import Goal from './Goal.js'; 
import { loadCalendarData,toggleGoal } from '../../actions/dashBoardActions';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
    note: store.dashboard.note,
    days: store.dashboard.days,
    loadedCalendar: store.dashboard.loadedCalendar,
    goal: store.dashboard.goal,
    showGoal: store.dashboard.showGoal
  }
}

class Dashboard extends React.Component{
  toggleGoal = (e,goal) => {
    e.preventDefault();
    this.props.dispatch(toggleGoal(e,goal))
  }
  componentDidMount(){
    this.props.dispatch(loadCalendarData())
  }
  render(){
    var note = this.props.note;
    var days = this.props.days;
    const goals = [
      {id: 1, goal: "wow"},
      {id: 2, goal: "entho"},
      {id: 3, goal: "oru sugam"},
      {id: 4, goal: "plz god give me a gf"},
      {id: 5, goal: "no im just kidding"}
    ]

    if(this.props.loadedCalendar)
      var displayCalendar = <Calendar note={note} days={days} />
    else
      var displayCalendar = ""

    if(this.props.showGoal)
      var displayGoal = ( 
                         <div className="goal-preview">
                         <p>{this.props.goal.goal}</p>
                         </div>
                        )
                        return(
                          <div className="dashboard-wrapper">
                          <Navbar isLight={true}/>
                          <TopBar title="DASHBOARD" />
                          <div className="dashboard-container">
                          {displayCalendar}
                          <div className="recent-posts">
                          <h2 className="h2-title"> RECENT POSTS </h2>
                          </div>
                          <h2 className="h2-title"> GOALS </h2>
                          
                          <Goal goals={goals} toggleGoal={this.toggleGoal}/>
                          {displayGoal}

                          </div>
                          </div>
                        )
  }
}

Dashboard = connect(mapStateToProps)(Dashboard);

module.exports = Dashboard;
