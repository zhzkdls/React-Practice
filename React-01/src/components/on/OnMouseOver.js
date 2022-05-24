import React from 'react';
import '../../css/css.css';

function OnMouseOver() {
  

  const buttonClick = (param) => {
    if(typeof param != 'string') param = "Click a"
    console.log('param : '+ param);
  }

  const change = (e) => {
    let val = e.target.value;
    console.log('param : '+ val);
  }



 
    return (
      <>
      <div className='all'>
        <button onClick={e => buttonClick("Click button")}>Click button</button>
        <div onClick={e => buttonClick("Click div")}>Click div</div>
        <a href="javascript:" onClick={buttonClick}>Click a</a>

        <input type="text" onChange={change}/>
        <select onChange={change}>
            <option value="react">react</option>
            <option value="200">200</option>
        </select>

      </div>
      </>
    )
  
}

export default OnMouseOver;