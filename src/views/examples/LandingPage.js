
import React from "react";
// react plugin used to create charts
// import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  // CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  // ListGroupItem,
  // ListGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  UncontrolledTooltip,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

// import bigChartData from "variables/charts.js";

const items = [
  {
    src: require("assets/img/denys.jfif"),
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: require("assets/img/denys.jfif"),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: require("assets/img/denys.jfif"),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const carouselItems = [
  {
    src: require("assets/img/apt602/one.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/apt602/two.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/apt602/three.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <div style={{
                  position: 'relative',
                  textAlign: 'center',
                  color: 'white',
                  width: '100%'
                }}>
                  <img style={{width: '100%', height: '100vh'}} src={require('assets/img/apt406/one.jpg')} alt="photo" />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}>
                    <h2 style={{
                      fontSize: '48px',
                      color: '#1e5457',
                      fontWeight: 900,
                      textShadow: '1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc',
                      fontFamily: 'Holtwood One SC'
                    }}>Dream home is always with you</h2>
                    <p style={{
                      fontSize: '30px',
                      color: 'white',
                      textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                      fontFamily: 'Pacifico'
                    }}>Selecting an agent you can trust is the first step in achieving a successful sale-buying or renting.</p>
                    <div className="space-50" />
                    <Button
                        className="btn-icon btn-simple btn-round btn-neutral fontSiz"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral fontSiz"
                        color="default"
                        href="https://www.instagram.com/dreamhomeagencykigali/"
                        target="_blank"
                        // onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram" />
                      </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral fontSiz"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral fontSiz"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                  </div>
                </div>
                {/* <Col lg="6" md="6">
                  <h1 className="text-white">
                    Dream home is always with you
                  </h1>
                  <p className="text-white mb-3">
                    Do you want to find your dream home <br />
                    <span className="text-white">or commercial place </span>
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      A rent from 50000Frw/mo
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="6" md="5">
                  <Row>
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/etherum.png")}
                    />
                  </Row>
                </Col> */}
              </Row>
            </div>
          </div>
          {/* <div className="section">
            <Row>
              
            </Row>
          </div> */}
          {/* <div className="section">
            <UncontrolledCarousel
              items={carouselItems}
              indicators={true}
              autoPlay={true}
            />
          </div> */}
          <div className="section">
            <Container>
              {/* <div className="title">
                <h3>Carousel</h3>
              </div> */}
              <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-0" lg="5">
                  <h1 className="text-white font-weight-light">
                    Large variety of properties
                  </h1>
                  <p className="text-white mt-4">
                    We've got places from suites to warehouses
                  </p>
                  <Button
                    className="mt-4"
                    color="warning"
                    href="#properties"
                  >
                    See all properties
                  </Button>
                </Col>
                <Col lg="6">
                  <UncontrolledCarousel
                    items={carouselItems}
                    indicators={true}
                    autoPlay={true}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section section-lg background sectionOneFonts">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row>
                  <Col md="4" sm="6" xs="12">
                    <hr className="line-info" />
                    <h1>
                      Choose the place{" "}
                      <span className="text-primary">that fits your needs</span>
                    </h1>
                  </Col>
                </Row>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" sm="6" xs="12" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-chart-bar-32 text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,237</CardTitle>
                                  <p />
                                  <p className="card-category">Apartments</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" sm="6" xs="12" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-bank text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,653</CardTitle>
                                  <p />
                                  <p className="card-category">Villas</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" sm="6" xs="12" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-gift-2 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">593</CardTitle>
                                  <p />
                                  <p className="card-category">Cottage House</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" sm="6" xs="12" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-istanbul text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">10,783</CardTitle>
                                  <p />
                                  <p className="card-category">Family House</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1 className="text-warning sectTitle">
                        Large range of choices
                      </h1>
                      <p className="sectPara">
                        We offer you thousands of nice places, and at reasonable price
                      </p>
                      <br />
                      <p className="sectPara">
                        You are at the right place to choose a place that fit your needs.
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5 sectPara"
                        href="/rent"
                        // onClick={e => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          {/* <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/chester-wade.jpg")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Total Investments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={bigChartData.data}
                      options={bigChartData.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </section> */}
          <section className="section section-lg section-coins">
            {/* <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            /> */}
            <Container>
              <div className="title">
                <h2 className="text-center">RidgeView Apartments</h2>
              </div>
              <Row>
              <Col md="6" sm="6" xs="12">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <div style={{position: 'relative'}}>
                            <img
                              alt="..."
                              // className="img-center img-fluid"
                              style={{width: '100%', height: 'auto'}}
                              src={require("assets/img/exterior/one.jpg")}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                left: '16px'
                              }}
                            >
                              <Badge className="badge-default">For rent</Badge>
                              <Badge className="badge-success">Furnished</Badge>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                left: '16px',
                                color: 'white',
                                padding: '0 5px',
                                background: 'rgba(12, 23, 23, 0.8)'
                              }}
                            >
                              <span className="text-uppercase">$600/Per month</span>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '16px'
                              }}
                            >
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048349"
                              >
                                <i className="tim-icons icon-camera-18" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048349"
                              >
                                <span>(4) pictures</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048346"
                              >
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048346"
                              >
                                <span>Compare</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048347"
                              >
                                <i className="tim-icons icon-cart" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048347"
                              >
                                <span>Book place</span>
                              </UncontrolledTooltip>
                            </div>
                          </div>
                        </Col>
                        <Col className="text-center" md="12">
                          <h4 style={{color: 'white', marginTop: '10px'}}>Spacious 3 bedrooms apartment</h4>
                          <h5>Location: Vision city, Gacuriro, Kigali</h5>
                          <h6>Bedrooms: 3, Baths: 2</h6>
                          <Badge className="badge-danger">Apartment</Badge>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple btn-block" color="info">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <div style={{position: 'relative'}}>
                            <img
                              alt="..."
                              // className="img-center img-fluid"
                              style={{width: '100%', height: 'auto'}}
                              src={require("assets/img/exterior/two.jpg")}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                left: '16px'
                              }}
                            >
                              <Badge className="badge-default">For rent</Badge>
                              <Badge className="badge-success">Furnished</Badge>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                left: '16px',
                                color: 'white',
                                padding: '0 5px',
                                background: 'rgba(12, 23, 23, 0.8)'
                              }}
                            >
                              <span className="text-uppercase">$600/Per month</span>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '16px'
                              }}
                            >
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048349"
                              >
                                <i className="tim-icons icon-camera-18" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048349"
                              >
                                <span>(4) pictures</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048346"
                              >
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048346"
                              >
                                <span>Compare</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048347"
                              >
                                <i className="tim-icons icon-cart" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048347"
                              >
                                <span>Book place</span>
                              </UncontrolledTooltip>
                            </div>
                          </div>
                        </Col>
                        <Col className="text-center" md="12">
                          <h4 style={{color: 'white', marginTop: '10px'}}>Spacious 3 bedrooms apartment</h4>
                          <h5>Location: Vision city, Gacuriro, Kigali</h5>
                          <h6>Bedrooms: 3, Baths: 2</h6>
                          <Badge className="badge-danger">Apartment</Badge>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple btn-block" color="info">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <div style={{position: 'relative'}}>
                            <img
                              alt="..."
                              // className="img-center img-fluid"
                              style={{width: '100%', height: 'auto'}}
                              src={require("assets/img/exterior/three.jpg")}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                left: '16px'
                              }}
                            >
                              <Badge className="badge-default">For rent</Badge>
                              <Badge className="badge-success">Furnished</Badge>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                left: '16px',
                                color: 'white',
                                padding: '0 5px',
                                background: 'rgba(12, 23, 23, 0.8)'
                              }}
                            >
                              <span className="text-uppercase">$600/Per month</span>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '16px'
                              }}
                            >
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048349"
                              >
                                <i className="tim-icons icon-camera-18" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048349"
                              >
                                <span>(4) pictures</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048346"
                              >
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048346"
                              >
                                <span>Compare</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048347"
                              >
                                <i className="tim-icons icon-cart" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048347"
                              >
                                <span>Book place</span>
                              </UncontrolledTooltip>
                            </div>
                          </div>
                        </Col>
                        <Col className="text-center" md="12">
                          <h4 style={{color: 'white', marginTop: '10px'}}>Spacious 3 bedrooms apartment</h4>
                          <h5>Location: Vision city, Gacuriro, Kigali</h5>
                          <h6>Bedrooms: 3, Baths: 2</h6>
                          <Badge className="badge-danger">Apartment</Badge>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple btn-block" color="info">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <div style={{position: 'relative'}}>
                            <img
                              alt="..."
                              // className="img-center img-fluid"
                              style={{width: '100%', height: 'auto'}}
                              src={require("assets/img/exterior/four.jpg")}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                left: '16px'
                              }}
                            >
                              <Badge className="badge-default">For rent</Badge>
                              <Badge className="badge-success">Furnished</Badge>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                left: '16px',
                                color: 'white',
                                padding: '0 5px',
                                background: 'rgba(12, 23, 23, 0.8)'
                              }}
                            >
                              <span className="text-uppercase">$600/Per month</span>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '16px'
                              }}
                            >
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048349"
                              >
                                <i className="tim-icons icon-camera-18" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048349"
                              >
                                <span>(4) pictures</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048346"
                              >
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048346"
                              >
                                <span>Compare</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048347"
                              >
                                <i className="tim-icons icon-cart" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048347"
                              >
                                <span>Book place</span>
                              </UncontrolledTooltip>
                            </div>
                          </div>
                        </Col>
                        <Col className="text-center" md="12">
                          <h4 style={{color: 'white', marginTop: '10px'}}>Spacious 3 bedrooms apartment</h4>
                          <h5>Location: Vision city, Gacuriro, Kigali</h5>
                          <h6>Bedrooms: 3, Baths: 2</h6>
                          <Badge className="badge-danger">Apartment</Badge>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple btn-block" color="info">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <div style={{position: 'relative'}}>
                            <img
                              alt="..."
                              // className="img-center img-fluid"
                              style={{width: '100%', height: 'auto'}}
                              src={require("assets/img/exterior/two.jpg")}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                left: '16px'
                              }}
                            >
                              <Badge className="badge-default">For rent</Badge>
                              <Badge className="badge-success">Furnished</Badge>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                left: '16px',
                                color: 'white',
                                padding: '0 5px',
                                background: 'rgba(12, 23, 23, 0.8)'
                              }}
                            >
                              <span className="text-uppercase">$600/Per month</span>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '16px'
                              }}
                            >
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048349"
                              >
                                <i className="tim-icons icon-camera-18" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048349"
                              >
                                <span>(4) pictures</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048346"
                              >
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048346"
                              >
                                <span>Compare</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048347"
                              >
                                <i className="tim-icons icon-cart" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048347"
                              >
                                <span>Book place</span>
                              </UncontrolledTooltip>
                            </div>
                          </div>
                        </Col>
                        <Col className="text-center" md="12">
                          <h4 style={{color: 'white', marginTop: '10px'}}>Spacious 3 bedrooms apartment</h4>
                          <h5>Location: Vision city, Gacuriro, Kigali</h5>
                          <h6>Bedrooms: 3, Baths: 2</h6>
                          <Badge className="badge-danger">Apartment</Badge>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple btn-block" color="info">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6" sm="6" xs="12">
                  <Card>
                    <CardBody>
                      <Row>
                        <Col md="12">
                          <div style={{position: 'relative'}}>
                            <img
                              alt="..."
                              // className="img-center img-fluid"
                              style={{width: '100%', height: 'auto'}}
                              src={require("assets/img/exterior/two1.jpg")}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                top: '8px',
                                left: '16px'
                              }}
                            >
                              <Badge className="badge-default">For rent</Badge>
                              <Badge className="badge-success">Furnished</Badge>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                left: '16px',
                                color: 'white',
                                padding: '0 5px',
                                background: 'rgba(12, 23, 23, 0.8)'
                              }}
                            >
                              <span className="text-uppercase">$600/Per month</span>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '8px',
                                right: '16px'
                              }}
                            >
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048349"
                              >
                                <i className="tim-icons icon-camera-18" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048349"
                              >
                                <span>(4) pictures</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048346"
                              >
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048346"
                              >
                                <span>Compare</span>
                              </UncontrolledTooltip>
                              <Button
                                className="btn-icon btn-round btn-sm"
                                color="default"
                                type="button"
                                id="tooltip376048347"
                              >
                                <i className="tim-icons icon-cart" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                color="default"
                                placement="top"
                                target="tooltip376048347"
                              >
                                <span>Book place</span>
                              </UncontrolledTooltip>
                            </div>
                          </div>
                        </Col>
                        <Col className="text-center" md="12">
                          <h4 style={{color: 'white', marginTop: '10px'}}>Spacious 3 bedrooms apartment</h4>
                          <h5>Location: Vision city, Gacuriro, Kigali</h5>
                          <h6>Bedrooms: 3, Baths: 2</h6>
                          <Badge className="badge-danger">Apartment</Badge>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple btn-block" color="info">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            {/* <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("assets/img/path2.png")}
            /> */}
            </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
