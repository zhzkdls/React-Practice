import React, { Component } from 'react';
import '../../css/css.css';

class OnMouseOver extends Component {
  MouseOver(tag) {
    console.log('TAG : '+tag);
  }

  MouseMove(tag) {
    console.log('TAG : '+tag);
  }

  MouseOut(tag) {
    console.log('TAG : '+tag);
  }

  buttonClick = (param) => {
    if(typeof param != 'string') param = "Click a"
    console.log('param : '+ param);
  }

  change = (e) => {
    var val = e.target.value;
    console.log('param : '+ val);
  }

  render() {
    return (
      <>
      <div className='all'>
        <div className='class' onMouseOver={e => this.MouseOver("div")}>
          <h3>DIV onMouseOver</h3>       
        <input type="text" onMouseOver={e => this.MouseOver("input")}/>
        <select onMouseOver={e => this.MouseOver("select")}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>
        </div>

        <div className='class' onMouseOut={e => this.MouseOut("div")}>
          <h3>DIV onMouseOut</h3>
        
        <input type="text" onMouseOut={e => this.MouseOut("input")}/>
        <select onMouseOut={e => this.MouseOut("select")}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>
        </div>

        <button onClick={e => this.buttonClick("Click button")}>Click button</button>
        <div onClick={e => this.buttonClick("Click div")}>Click div</div>
        <a href="javascript:" onClick={this.buttonClick}>Click a</a>

        <input type="text" onChange={this.change}/>
        <select onChange={this.change}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>

        <div className='class' onMouseMove={e => this.MouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={e => this.MouseMove("input")}/>
        <select onMouseMove={e => this.MouseMove("select")}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>

      </div>
      </>
    )
  }
}

export default OnMouseOver;