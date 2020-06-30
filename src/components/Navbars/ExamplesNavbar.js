
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  UncontrolledTooltip,
  Input,
  Label,
  FormGroup,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  Modal,
  Form
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              to="/"
              id="navbar-brand"
              tag={Link}
            >
              <span>Dream Home Agency </span>
              
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Home Sweet Home.
            </UncontrolledTooltip>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                  DreamHome•Agency
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="/properties"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Properties
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem href="/sales">
                    <i className="tim-icons icon-paper" />
                    Sale
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/rent">
                    <i className="tim-icons icon-bullet-list-67" />
                    Rent
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/blog">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">
                  About us
                </NavLink>
              </NavItem>
              {/* <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  // target="_blank"
                  href="/register-page"
                >
                  <i className="tim-icons icon-bullet-list-67" /> Sign Up
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={() => this.toggleModal("formModal")}
                >
                  <i className="tim-icons icon-single-02" /> Login
                </Button>
                {/* Start Form Modal */}
                <Modal
                  modalClassName="modal-black"
                  isOpen={this.state.formModal}
                  toggle={() => this.toggleModal("formModal")}
                >
                  <div className="modal-header justify-content-center">
                    <button
                      className="close"
                      onClick={() => this.toggleModal("formModal")}
                    >
                      <i className="tim-icons icon-simple-remove text-white" />
                    </button>
                    <div className="text-muted text-center ml-auto mr-auto">
                      <h3 className="mb-0">Login with</h3>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="btn-wrapper text-center">
                      {/* <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <img alt="..." src={require("assets/img/github.svg")} />
                      </Button> */}
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <img alt="..." src={require("assets/img/google.svg")} />
                      </Button>
                    </div>
                    <div className="text-center text-muted mb-4 mt-3">
                      <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup
                          className={classnames("input-group-alternative", {
                            "input-group-focus": this.state.emailFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup
                          className={classnames("input-group-alternative", {
                            "input-group-focus": this.state.passwordFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-key-25" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            onFocus={e => this.setState({ passwordFocus: true })}
                            onBlur={e => this.setState({ passwordFocus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup check className="mt-3">
                        <Label check>
                          <Input defaultChecked type="checkbox" />
                          <span className="form-check-sign" />
                          Remember me!
                        </Label>
                      </FormGroup>
                      <div className="text-center">
                        <Button className="my-4 btn-block" color="primary" type="button">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Modal>
                {/* End Form Modal */}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
