import React, { Component } from "react";
import axios from "axios";

import M from "materialize-css";
export default class addmessage extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      description: "",
      date: new Date(),
      messages: []
    };
  }

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeDate = date => {
    this.setState({ date: date });
  };

  onSubmit = e => {
    e.preventDefault();
    const message = {
      name: this.state.name,
      description: this.state.description,
      date: this.state.date
    };
    console.log(message);

    axios
      .post("http://localhost:5000/api/messages", message)
      .then(res => console.log(res.data));

    window.location = "/";
  };

  componentDidMount() {
    var context = this;
    document.addEventListener("DOMContentLoaded", function() {
      var start = document.querySelectorAll(".datepicker");
      M.Datepicker.init(start, {
        format: "mm/dd/yyyy",
        autoClose: true,
        onClose: context.handleDate,
        minDate: new Date()
      });
    });
  }

  render() {
    return (
      <div
        className=" card col l6 offset-l8 s12 blue lighten-1
      "
      >
        <h1 className="card-title white-text">MAKE A REQUEST</h1>
        <form onSubmit={this.onSubmit} className="card-content">
          <div className="inputfield">
            <label className="white-text">NAME*</label>

            <input
              type="text"
              className="validate"
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="inputfield">
            <label className="white-text"> Message*</label>
            <input
              type="text"
              className="validate"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div>
            <label className="white-text"> DATE*</label>

            <div>
              <input
                type="text"
                className="datepicker"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div>
            <button
              className="btn waves-effect waves-light light-blue accent-1"
              type="submit"
              value="Submit"
            >
              Request <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
