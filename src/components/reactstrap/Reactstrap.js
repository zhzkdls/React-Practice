import React, { Component } from 'react';
import {
   Alert, UncontrolledAlert, Breadcrumb, BreadcrumbItem, 
   Badge, Button, ButtonDropdown, DropdownToggle, DropdownMenu, 
   DropdownItem, ButtonGroup, UncontrolledCarousel, Card, 
   CardImg, CardText, CardBody, CardTitle, CardSubtitle, 
   UncontrolledCollapse, Input, Col, Label, FormGroup, Row, 
   Form, Fade, Pagination, PaginationItem, PaginationLink, Modal, 
   ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import '../../css/css.css';

const items = [
  {
    src: 'http://bitly.kr/QUnjzAodA',
    altText: '슬라이드1 안녕',
    caption: '슬라이드1 설명',
    header: '슬라이드1 제목'
  },
  {
    src: 'http://bitly.kr/n3vBOWt9g',
    altText: '슬라이드2 하하',
    caption: '슬라이드2 설명',
    header: '슬라이드2 제목'
  },
  {
    src: 'http://bitly.kr/uzWLMeIJh',
    altText: '슬라이드3 초마야',
    caption: '슬라이드3 설명',
    header: '슬라이드3 제목'
  }
];

class Reactstrap extends Component {

  
  constructor (props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
    this.state = { number: 10 }
    this.state = { fadeInOut: true }
    this.state = { modal: false }
  }

  toggle = (e) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  move = (type, e) => {
    if(type === 'Left'){
      this.setState({number: this.state.number - 1})
    }else if(type === 'Right')(
      this.setState({number: this.state.number + 1})
    )
  }

  toggle = (e) => {
    this.setState({ fadeInOut: !this.state.fadeInOut })
  }

  pagination = (type) => {
    alert("Go "+type)
  }

  toggle = () => {
    this.setState({modal: !this.state.modal})
  }

  render() {
    return (
      <div className='all' id="top">
      <div className='class'>

      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
      </Breadcrumb>

      <UncontrolledCarousel items={items} />

      <Alert color="light">
        Simple Alert [color : light]
      </Alert>
      <UncontrolledAlert color="warning">
        Uncontrolled Alert [color : warning]
      </UncontrolledAlert>

      <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill >pill</Badge>
        <Badge href="http://example.com" color="black">GoLink</Badge>

        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>헤더</DropdownItem>
          <DropdownItem disabled>비활성화 버튼</DropdownItem>
          <a href="http://example.com/">
            <DropdownItem>example 사이트로 이동</DropdownItem>
          </a>
          <DropdownItem onClick={e => alert("Alert 버튼")}>Alert 버튼</DropdownItem>
        </DropdownMenu>
        </ButtonDropdown>

        <div style={{padding: "10px"}}>
          <ButtonGroup style={{padding: "10px"}}>
            <Button onClick={e => this.move('Left')}>Left</Button>
            <Button onClick={e => this.move('Middle')}>Middle</Button>
            <Button onClick={e => this.move('Right')}>Right</Button>
          </ButtonGroup>
          <br/>{this.state.number}
        </div>

        <div style={{padding: "30px"}}>
        <Card>
          <CardImg top height="200px" src="http://bitly.kr/4KkfRxZfR" alt="Card image cap" />
          <CardBody style={{color: "black"}}>
            <CardTitle >Card 제목</CardTitle>
            <CardSubtitle>Card 부제목</CardSubtitle>
            <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
            <Button color="info">버튼</Button>
          </CardBody>
          </Card>
        </div>

        <div style={{padding: "30px"}}>
        <Button color="primary">blue</Button>
        <Button color="info">teal</Button>
        <Button color="success">green</Button>
        <Button color="warning">yellow</Button>
        <Button color="danger">red</Button>
        <Button color="dark">dark gray</Button>
        <Button color="secondary">gray</Button>
        <Button color="light">white</Button>
        </div>

        <div style={{padding: "30px"}}>
        <Button color="warning" id="toggle">
          펼치기/접기
        </Button>
        <UncontrolledCollapse style={{color: "black"}} toggler="#toggle">
          <Card>
            <CardBody >
              REACT 200
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        </div>

        <Form style={{padding: "30px"}}>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAddress">address</Label>
              <Input type="text" name="address" id="address"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleMobile">mobile</Label>
              <Input type="text" name="mobile" id="mobile"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleAge">age</Label>
              <Input type="text" name="age" id="age"/>
            </FormGroup>
          </Col>
          </Row>
        </Form>

        <div>
          <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
          <Fade in={this.state.fadeInOut} tag="h1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Fade>
        </div>

        <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous onClick={e => this.pagination("previous")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={e => this.pagination("1")}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={e => this.pagination("2")}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={e => this.pagination("last")} />
        </PaginationItem>
        </Pagination>

        <Button color="warning" onClick={this.toggle}>Modal 버튼</Button>
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
          <ModalBody>
            The generated Lorem Ipsum is therefore always free from repetition.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>확인</Button>
            <Button color="secondary" onClick={this.toggle}>닫기</Button>
          </ModalFooter>
        </Modal>




        
        <div id="bottom" style={{marginTop:"2000px"}}>
          <span>bottom</span>
        </div>

        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
        </Breadcrumb>
        





       
      </div>
      </div>
    )
  }
}

export default Reactstrap;