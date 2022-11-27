import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
	return (

		<Navcontainer>
			<Navbar collapseOnSelect expand='lg'  >
				<Container>
					<Navbar.Brand>
						Biblio
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />

					<Navbar.Collapse id='responsive-navbar-nav'>

						<Nav className='justify-content-center'>

							<Nav.Link href="tesr">ACCUEIL</Nav.Link>
							<Nav.Link href="tesr">A PROPOS</Nav.Link>
							<Nav.Link href="tesr">LIBRAIRIE</Nav.Link>
							<Nav.Link href="tesr">CONTACT</Nav.Link>


						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse id='responsive-navbar-nav'>


						<Nav className='justify-content-end'>
							<Nav.Link href="tesr">MON COMPTE</Nav.Link>
							<Nav.Link href="tesr">SE DECONNECTER</Nav.Link>
						</Nav>
					</Navbar.Collapse>

				</Container>
			</Navbar>

		</Navcontainer>

	);
}

export default NavBar;
const Navcontainer = styled.div`
 background-color:#FFF9F0;
 .navbar-brand{
	font-weight:800;
	color : #5A371C !important; 
	
	&:hover{
	 color: #774723 !important;
	} 
 }
 .nav-link{
	 color : #5A371C !important; 
	 font-weight:500;
	 &:hover{
		color: #774723 !important;
	 } 
 }
 
 
 `