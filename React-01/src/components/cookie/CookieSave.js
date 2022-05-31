import React, { Component } from 'react';
import cookie from 'react-cookies';
import '../../css/css.css';
import { Link } from 'react-router-dom'

class CookieSave extends Component {
  componentDidMount() {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    cookie.save('userid', "하영천재"
        , {
            path: '/',
            expires,
            // secure: true,
            // httpOnly: true
        }
    );
    setTimeout(function() {
      alert(cookie.load('userid'))
    },1000);
    setTimeout(function() {
      alert(cookie.load('userid'))
    },2000);
  }

  render() {
    return (
      <div className='all'>
        <div className='class'>
          <h3>react-cookies Save</h3>
          <h3>react-cookies Load</h3>
        </div>
      </div>
    )
  }
}

export default CookieSave;