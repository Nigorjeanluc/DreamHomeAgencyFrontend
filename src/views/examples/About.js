import React from "react";
// reactstrap components
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Button,
    UncontrolledTooltip
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/ExamplesNavbar";
import AboutHeader from "../../components/PageHeader/AboutHeader.js";
import Footer from "components/Footer/Footer.js";


class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <AboutHeader />
          <div className="main">
            <Container>
                <div className="space-50" />
                <div className="text-center" id="images">
                <h2 className="mb-5">Our team</h2>
                <Row>
                    <Col sm="4" xs="6">
                        <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/ryan.jpg")}
                        style={{ width: "80%", marginBottom: '10px' }}
                        />
                        <div className="space-20" />
                        <h4 className="d-block text-uppercase font-weight-bold mb-4">
                        CEO
                        </h4>
                    </Col>
                    <Col sm="4" xs="6">
                        <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/james.jpg")}
                        style={{ width: "80%", marginBottom: '10px' }}
                        />
                        <div className="space-20" />
                        <h4 className="d-block text-uppercase font-weight-bold mb-4">
                        Assistant
                        </h4>
                    </Col>
                    <Col sm="4" xs="6">
                        <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/lora.jpg")}
                        style={{ width: "80%", marginBottom: '10px' }}
                        />
                        <div className="space-20" />
                        <h4 className="d-block text-uppercase font-weight-bold mb-4">
                        Manager
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className="space-50" />
                        <div className="space-50" />
                    </Col>
                    <Col md="6">
                        <Card className="card-plain">
                            <CardBody>
                            <h1 className="profile-title text-left">Contact Us</h1>
                            <Form>
                                <Row>
                                <Col md="6">
                                    <FormGroup>
                                    <label>Your Name</label>
                                    <Input defaultValue="Mike" type="text" />
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <label>Email address</label>
                                    <Input
                                        placeholder="mike@email.com"
                                        type="email" style={{color: 'white'}}
                                    />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="6">
                                    <FormGroup>
                                    <label>Phone</label>
                                    <Input defaultValue="001-12321345" type="text" />
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                    <label>Company</label>
                                    <Input defaultValue="CreativeTim" type="text" />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Message</label>
                                    <Input placeholder="Hello there!" type="text" />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Button
                                className="btn-round float-right"
                                color="primary"
                                data-placement="right"
                                id="tooltip341148792"
                                type="button"
                                >
                                Send text
                                </Button>
                                <UncontrolledTooltip
                                delay={0}
                                placement="right"
                                target="tooltip341148792"
                                >
                                Can't wait for your message
                                </UncontrolledTooltip>
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <div style={{padding: '10px 0'}} className="info info-horizontal">
                            <div className="icon icon-primary">
                                <i className="tim-icons icon-square-pin" />
                            </div>
                            <div className="description">
                                <h4 className="info-title">Find us at the office</h4>
                                <p>
                                    Avenue Paul VI, <br />
                                    St 204 KN, <br />
                                    Kigali, Rwanda
                                </p>
                            </div>
                        </div>
                        <div className="info info-horizontal">
                            <div className="icon icon-primary">
                            <i className="tim-icons icon-mobile" />
                            </div>
                            <div className="description">
                            <h4 className="info-title">Give us a ring</h4>
                            <p>
                                Dream Home Agency <br />
                                +250 787777777<br />
                                agency@dreamhomeagency.com<br />
                                Mon - Fri, 8:00-22:00
                            </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
                <div className="space-50" />
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
