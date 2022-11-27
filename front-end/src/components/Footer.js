import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Footerstyle>

			<div className='main-footer'>
				<div className='container'>
					<div className='row'>
						{/*column 1*/}
						<div className='col'>
							<h4>Categories</h4>

							<ul className='list-unstyled'>
								<li>Fiction</li>
								<li>BD et mangas
								</li>
								<li>Mystère & Thriller</li>
								<li>Fantaisie</li>
								<li>Histoire & Biographie
								</li>
								<li>Romance</li>
								<li>Comedie</li>
								<li>Non fiction</li>
							</ul>
						</div>
						{/*column 2*/}
						<div className='col'>	<h4>Qui Sommes Nous
							Categories</h4>
							<ul className='list-unstyled'>
								<li>Nous contacter
								</li>
								<li>Qui sommes nous

								</li>
								<li>Vie privée
								</li>
								<li>Conditions générales de vente
								</li>
								<li>Recrutement
								</li>

							</ul>
						</div>
						{/*column 3*/}
						<div className='col'>
							<h4>Libraire et accueil commercial</h4>
							<ul className='list-unstyled'>
								<li>Biblio.ma
								</li>
								<li>6 rue Abderrahmane kawakibi (ex. Mandret),</li>
								<li>	 Quartier Gauthier 20000 Casablanca Qui sommes nous

								</li>
								<li>contact@biblio.ma
								</li>


							</ul>
						</div>
					</div>

				</div>

			</div>
		</Footerstyle>
	);
}

export default Footer;
const Footerstyle = styled.footer`
background-color : #1F1F1F  ;
color: #F3E2CB;
height: 23rem;
padding-top:70px;
.
`;