import { Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';

const Mastheat = ({ children, imagePath }) => (
	<div className="masthead" style={{ backgroundImage: `url(${imagePath})` }}>
		<div className="overlay" />
		<Container>
			<Row>
				<div className="col-lg-8 col-md-10 mx-auto">
					<div className="site-heading">{children}</div>
				</div>
			</Row>
		</Container>
	</div>
);
export default Mastheat;
