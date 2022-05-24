import React from 'react';
import Swal from 'sweetalert2'
import '../../css/css.css';

function Sweetalert() {
  
  const componentDidMount = (e) => {
    Swal.fire('입장을 하시겠습니까?').then(result => { Swal.fire('반갑습니다') })
  }

  const saveAlert = (flag, positionflag, e) => {
    Swal.fire({
      position: positionflag,
      icon: 'success',
      title: flag+'되었습니다.',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const deletAlert = (e) => {
    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4B088A',
      cancelButtonColor: '#01DF01',
      confirmButtonText: '예',
      cancelButtonText: '아니요'
    }).then((result) => {
      if (result.value) {
        document.getElementById('deleteId').remove();
        Swal.fire(
          'Deleted',
          'sweetalert2 삭제완료',
          'success'
        )
      }
    })
  }

  
    return (
      <div className='all'>
        <div className='class'>
          <h1>sweetalert</h1>
          <button onClick={e => componentDidMount('입장', 'center')}>입장</button>

          <h1>sweetalert2</h1>
          <button onClick={e => saveAlert('저장', 'center')}>저장</button>
          <button onClick={e => saveAlert('수정', 'bottom-end')}>수정</button>
          
          <h1 id='deleteId'>sweetalert2</h1>
          <button onClick={e => deletAlert()}>삭제</button>
        </div>
      </div>
  )
  
}

export default Sweetalert;