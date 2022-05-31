import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ReactRouter extends Component {
  render() {
    return (
      <div>
        <h1>path='/reactRouter2'</h1>
        <h3>R089_reactRouter</h3>
        <Link to={'/reactRouter2'}>reactRouter2</Link>
      </div>
    )
  }
}

export default ReactRouter;