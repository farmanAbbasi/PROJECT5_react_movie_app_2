import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as RiIcons from 'react-icons/ri';

const ExerciseCard = props => (

  <div class="maincard">
    <div>
      <div style={{fontWeight:"bold",padding:"10px 0px"}}>
      {props.exercise.movie}
      </div>
       <p>{props.exercise.description.substring(0, 80)}</p>
    </div>
    {/* props.deleteExercise(props.exercise._id)   */}
    
    <div className="user">
      <div style={{fontSize:"13px"}}>
      <p style={{marginBottom:"0px"}}>By {props.exercise.username}</p>
        <p  style={{marginBottom:"0px"}}> {props.exercise.date.substring(0, 10)} </p>
      </div>
      <div>
            <Link className="myIcons" to={{pathname: `/edit/${props.exercise._id}`,
            back_url: `${props.backend_url}`}}>
            <RiIcons.RiEditLine/>
            </Link> 
            <span className="myIcons" >
            
            <RiIcons.RiDeleteBin6Line onClick={() => {console.log("delete clicked")}}/>
            </span>
            <span className="myIcons" >
              <RiIcons.RiAliensLine/>
            </span>
         </div>

     
    </div>

  </div>
  
)


// AiOutlineSmile
export default class MoviesList extends Component {

  state = { exercises: [] };


  componentDidMount() {
    console.log(this.props.backend_url)
    axios.get(this.props.backend_url + '/exercises')
      .then(response => {
        //console.log(response.data)
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise = (id) => {
    axios.delete(this.props.backend_url + '/exercises/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList = () => {
    return this.state.exercises.map(currentexercise => {
      // return <Exercise backend_url={this.props.backend_url} exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
      return <ExerciseCard backend_url={this.props.backend_url} exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;

    })
  }

  render() {
    return (
      <>
        <h3 >Todays Top Ten</h3>
        <hr></hr>
        <div className="cards">
          {/* <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Movie</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table> */}
          {this.exerciseList()}
        </div>
      </>
    )
  }
}