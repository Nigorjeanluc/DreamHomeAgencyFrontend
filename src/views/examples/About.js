import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
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

const mapStyles = {
    width: '100%',
    height: '500px',
    zIndex: '4'
};
  
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
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Our Mission</h4>
                        <hr className="line-primary" />
                        <p>
                            We aim to be the forefront of property, marketing, and provide tailored, 
                            innovative solutions that fit our client’s individual property and situations to ensure the best outcome is achieved.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">Our Vision</h4>
                        <hr className="line-warning" />
                        <p>
                            Dream Home Agency will be regions premier real estate’s firm, specializing in residential properties sales and rent. 
                            In order to make our Renting, Buying and selling of Real Estates as cost effective as possible while maintaining the highest level of services.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Verified People</h4>
                        <hr className="line-success" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing be enough.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Container>
                <div className="space-50" />
                <div className="text-center" id="images">
                {/* <h2 className="mb-5">Our team</h2> */}
                {/* <Row>
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
                </Row> */}
                <Row>
                    <Col md="12">
                        <div className="space-50" />
                        <div className="space-50" />
                    </Col>
                    {/* <Col md="12">
                        <Map
                            google={this.props.google}
                            zoom={18}
                            style={mapStyles}
                            initialCenter={{ lat: -1.932710, lng: 30.100737}}
                        />
                        <Marker position={{ lat: -1.932710, lng: 30.100737}} />
                    </Col> */}
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
                                    <Input placeholder="Hello there!" type="text"  />
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
                                Submit
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
                                    Nyarutarama, <br />
                                    KG 209 St, <br />
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
                                +250 788230158<br />
                                agency@dreamhomeagency.rw<br />
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
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBuwCZwCFY36oL4QFzpKReuw8HmwqsIVMM'
})(Index);
