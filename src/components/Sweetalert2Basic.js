import React, { Component } from 'react';
import Swal from 'sweetalert2'

class Sweetalert2Basic extends Component {
  componentDidMount(){
    // Swal.fire('1. SweetAlert')
    // alert('2. alert()')
    // Swal.fire('사진을 등록할시겠습니까?').then(result => { alert('등록이 되었습니다 : '+result.value) })
    Swal.fire('사진을 등록할시겠습니까?').then(result => { alert('등록이 되었습니다') })
  }

  render() {
    return (
      <h1>sweetalert2</h1>
   )
  }
}

export default Sweetalert2Basic;