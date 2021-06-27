import logo from './logo.svg';
import './App.css';
import Game from "./simon/Game"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Promises from "./components/Promises"

import FruitMachine from "./fruitmachine/FruitMachine"

import Hooks from "./components/Hooks"

import PersonList from "./components/PersonList"

function App() {
  return (
    <>
    <Container>
    <PersonList />
    <Hooks />
    <FruitMachine />
    </Container>

    {/*
    <header>
      <Container>
        <Promises />
      </Container>
      <Container>
    <Breadcrumb>
      <Breadcrumb.Item>1st</Breadcrumb.Item>
      <Breadcrumb.Item>2nd</Breadcrumb.Item>
      <Breadcrumb.Item active>3rd</Breadcrumb.Item>
    </Breadcrumb>
    <Form>
      <Row>
        <Col md>
      <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="example@email/com" />
        <Form.Text className="text-muted">Well never share your email address.</Form.Text>
      </Form.Group>
      </Col>
      <Col md>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
      <Button varient="secondary" type="submit">Login</Button>
      </Col>
      </Row>
    </Form>
    <Card className="mb-3">
      <Card.Img src="//picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>
          Card Title
        </Card.Title>
        <Card.Body>
          Card Body in here
        </Card.Body>
      </Card.Body>
    </Card>
    <Alert variant="info">Simon Game</Alert>
    <Button>Test Button</Button>
    </Container>
    </header>
    <Container>
    <Game />

    </Container>
    */}
    </>
  )
}

export default App;
