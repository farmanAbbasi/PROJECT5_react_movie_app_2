import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateMovies extends Component {

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

  state = {
    username: '',
    movie: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: []
  }


  componentDidMount() {
    axios.get(this.props.backend_url + '/users')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }


  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onChangeMovie = (e) => {
    this.setState({
      movie: e.target.value
    })
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    })
  }

  // onInputForMovie = (query) => {
  //   const url = "https://api.themoviedb.org/3/search/movie?api_key=2d347e1b4a6068902af169281eaafe1c&query="
  //   axios.get(url + query)
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           movies: response.data.map(movie => "hello")
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      movie: this.state.movie,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post(this.props.backend_url + '/exercises/add', exercise)
      .then(res => {
        console.log(res.data)
        window.location = '/';
      }
      );


  }

  render() {
    return (
      
      <div>
        <h3>Create New Movies Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function (user) {
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>;
                })
              }
            </select>
          </div>
        


          <div className="form-group">
            <label>Movie Name:</label>
            <input type="text"
              required
              className="form-control"
              value={this.state.movie}
              onChange={this.onChangeMovie}
            />
          </div>

          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div className="form-control">
              <DatePicker  className=" myCustomDate"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Review" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}