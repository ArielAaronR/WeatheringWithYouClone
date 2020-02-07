import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
const Message = props => (
  <tr>
    <td className="row">
      <p id="message" className="col s12">
        {props.message.description}
      </p>

      <div className="row">
        <p id="name" className="col s6 ">
          {props.message.name}
        </p>
        <p id="date" className="col s4">
          {moment(props.message.date).format("MM-DD-YYYY")}
        </p>
      </div>
    </td>
  </tr>
);

export default class requestlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/messages")
      .then(res => this.setState({ messages: res.data.messages }));
  }
  // sortList = () => {
  //   const { messages } = this.state;

  // };

  render() {
    return (
      <div className=" card col l6 offset-l8 s12 ">
        <h1 className="card-title ">LATEST REQUESTS</h1>
        <div className="card-content divWithScroll">
          <table className="striped  ">
            <tbody>
              {this.state.messages.map(message => (
                <Message key={message._id} message={message} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
