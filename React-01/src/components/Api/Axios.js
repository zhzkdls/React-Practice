import React, { Component } from 'react';
import axios from "axios";

class AxiosGet extends Component {
  componentDidMount(){
    axios.get('http://localhost:3000/')
    .then( response => {alert(response.data.date)})
  }

  componentDidMount(){
    axios.post('http://localhost:3000/', {
      a:"react", b:200
    })
    .then( response => {alert(response.data.date)})
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3000/');
    const body = await response.json();
    alert(body.date)
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: { a:"react", b:200 },
    });
    const body = await response.json();
    alert(body.date)
  }

  render() {
    return (
        <h1>axios get</h1>
    )
  }
}

export default AxiosGet;