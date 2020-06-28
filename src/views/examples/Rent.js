import React from "react";
// reactstrap components
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button,
    UncontrolledTooltip,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import FontAwesome from 'react-fontawesome';

// core components
import IndexNavbar from "../../components/Navbars/ExamplesNavbar";
import PagesHeader from "../../components/PageHeader/PagesHeader.js";
import Footer from "components/Footer/Footer.js";
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
      src: require("assets/img/denys.jfif"),
      altText: "Slide 1",
      caption: ""
    },
    {
      src: require("assets/img/fabien-bazanegue.jpg"),
      altText: "Slide 2",
      caption: ""
    },
    {
      src: require("assets/img/mark-finn.jpeg"),
      altText: "Slide 3",
      caption: ""
    }
  ];  

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
          {/* <PagesHeader pageTitle={"Properties for rent"} /> */}
          <div className="main">
            <Container>
                <div className="space-50" />
                <div className="space-50" />
                <div className="space-50" />
                <div className="text-center" id="images">
                <h2 className="mb-5">Properties to rent</h2>
                <Row>
                    <Col sm="3" xs="12">
                        <Card>
                            <CardBody>
                                <h4>Refine your search</h4>
                                <Form>
                                    <h6>Select a city</h6>
                                    <FormGroup>
                                        <Input className="has-success" type="select" placeholder="Select a city" name="select" id="exampleSelect">
                                            <option style={{color: 'black'}}>Kigali</option>
                                            <option style={{color: 'black'}}>Huye</option>
                                            <option style={{color: 'black'}}>Muhanga</option>
                                            <option style={{color: 'black'}}>Musanze</option>
                                            <option style={{color: 'black'}}>Rubavu</option>
                                            <option style={{color: 'black'}}>Rusizi</option>
                                        </Input>
                                    </FormGroup>
                                    <h6>Select a type</h6>
                                    <FormGroup>
                                        <Input className="has-success" type="select" placeholder="All types" name="select" id="exampleSelect">
                                            <option style={{color: 'black'}}>Apartments</option>
                                            <option style={{color: 'black'}}>Houses</option>
                                            <option style={{color: 'black'}}>Offices</option>
                                            <option style={{color: 'black'}}>Land</option>
                                            <option style={{color: 'black'}}>Retail Spaces</option>
                                            <option style={{color: 'black'}}>Investment Opportunities</option>
                                        </Input>
                                    </FormGroup>
                                    <Row>
                                        <Col md="6">
                                            <h6>Bedrooms</h6>
                                            <FormGroup>
                                                <Input className="has-success" type="select" placeholder="Bedrooms" name="select" id="exampleSelect">
                                                    <option style={{color: 'black'}}>1</option>
                                                    <option style={{color: 'black'}}>2</option>
                                                    <option style={{color: 'black'}}>3</option>
                                                    <option style={{color: 'black'}}>4</option>
                                                    <option style={{color: 'black'}}>5</option>
                                                    <option style={{color: 'black'}}>6</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <h6>Bathrooms</h6>
                                            <FormGroup>
                                                <Input className="has-success" type="select" placeholder="Bathrooms" name="select" id="exampleSelect">
                                                    <option style={{color: 'black'}}>1</option>
                                                    <option style={{color: 'black'}}>2</option>
                                                    <option style={{color: 'black'}}>3</option>
                                                    <option style={{color: 'black'}}>4</option>
                                                    <option style={{color: 'black'}}>5</option>
                                                    <option style={{color: 'black'}}>6</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button className="btn btn-sm btn-block" color="success">
                                        <span style={{display: 'inline'}}>
                                            <span>
                                                Search
                                                <span style={{float: 'right'}}>
                                                    <FontAwesome 
                                                        className="super-crazy-colors"
                                                        name="search"
                                                        size="1x"
                                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                                    />
                                                </span>
                                            </span>
                                        </span>
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="9" xs="12">
                    {/* <div className="title">
                        <h2>Properties</h2>
                    </div> */}
                    <Row>
                        <Col md="6">
                            <Card>
                                <CardBody>
                                <Row>
                                    <Col md="12">
                                    <div style={{position: 'relative'}}>
                                        <img
                                        alt="..."
                                        // className="img-center img-fluid"
                                        style={{width: '100%', height: 'auto'}}
                                        src={require("assets/img/denys.jfif")}
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
                            <Col md="6">
                            <Card>
                                <CardBody>
                                <Row>
                                    <Col md="12">
                                    <div style={{position: 'relative'}}>
                                        <img
                                        alt="..."
                                        // className="img-center img-fluid"
                                        style={{width: '100%', height: 'auto'}}
                                        src={require("assets/img/denys.jfif")}
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
                            <Col md="6">
                            <Card>
                                <CardBody>
                                <Row>
                                    <Col md="12">
                                    <div style={{position: 'relative'}}>
                                        <img
                                        alt="..."
                                        // className="img-center img-fluid"
                                        style={{width: '100%', height: 'auto'}}
                                        src={require("assets/img/denys.jfif")}
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
                            <Col md="6">
                            <Card>
                                <CardBody>
                                <Row>
                                    <Col md="12">
                                    <div style={{position: 'relative'}}>
                                        <img
                                        alt="..."
                                        // className="img-center img-fluid"
                                        style={{width: '100%', height: 'auto'}}
                                        src={require("assets/img/denys.jfif")}
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
                            <Col md="6">
                            <Card>
                                <CardBody>
                                <Row>
                                    <Col md="12">
                                    <div style={{position: 'relative'}}>
                                        <img
                                        alt="..."
                                        // className="img-center img-fluid"
                                        style={{width: '100%', height: 'auto'}}
                                        src={require("assets/img/denys.jfif")}
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
                            <Col md="6">
                            <Card>
                                <CardBody>
                                <Row>
                                    <Col md="12">
                                    <div style={{position: 'relative'}}>
                                        <img
                                        alt="..."
                                        // className="img-center img-fluid"
                                        style={{width: '100%', height: 'auto'}}
                                        src={require("assets/img/denys.jfif")}
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
