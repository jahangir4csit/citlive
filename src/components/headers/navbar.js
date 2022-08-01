import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"
import React, { Fragment, useEffect, useState } from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import BookButton from '../../images/Button-book.png'
import Logo from '../../images/cit_logo.png'
import ScrollTop from "../utils/scrollTop"
import { useMenuQuery } from "./menuQuery"



const MainNav = ()=>{

    const menuItem = useMenuQuery();

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);
      
    return(
        <Fragment>
            <Navbar expand="lg" className={'d-none d-lg-block ' + (scroll ? "nav_sticky" : "")} id="navbar">
                <Container>
                    <Navbar.Brand href="/"
                    data-sal="zoom-in"
                    data-sal-delay="300"
                    data-sal-duration="800"
                    data-sal-easing="ease"
                    >
                        <img src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 main_menu" as="ul">
                            {menuItem.map(
                                (menu,index)=>                         
                                <Nav.Item as="li"
                                key={index}
                                data-sal="slide-right"
                                data-sal-delay="300"
                                data-sal-duration="800"
                                data-sal-easing="ease"
                                >
                                    <a className='nav-link' target={'_blank'} href={menu.url}>{menu.label}</a>
                                </Nav.Item>
                            )}
                            <Nav.Item className="navbar_btn">
                                <Link to="/our-courses"
                                data-sal="flip-up"
                                data-sal-delay="300"
                                data-sal-duration="800"
                                data-sal-easing="ease"
                                >
                                <img src={BookButton} alt="icon" />
                                <span style={{ marginRight: '0.5rem' }} >ব্রাউজ কোর্স </span>
                                <FontAwesomeIcon icon={faAngleDown} /></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar className="sm_menu d-lg-none" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Brand href="/">
                        <img src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-column text-center ms-auto mb-2 mb-lg-0 main_menu" as="ul">
                                {menuItem.map(
                                    (menu,index)=>                         
                                    <Nav.Item as="li" key={index}>
                                        <a className='nav-link' target={'_blank'} href={menu.url}>{menu.label}</a>
                                    </Nav.Item>
                                )}
                                <Nav.Item className="navbar_btn text-center">
                                    <Link to="/our-courses"><img src={BookButton} alt="icon" />ব্রাউজ কোর্স <i className="fa fa-angle-down ps-2"></i></Link>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
            <ScrollTop data={scroll} />
        </Fragment>
    )
}
export default MainNav
