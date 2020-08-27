import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<div className="ga-container ga-align-center">
				<Link href="/">
					<a className="ga-logo ga-section-link ">GA</a>
				</Link>

				<ul className="ga-social-icons">
					<li>
						<a href="https://www.linkedin.com/in/georgeapetrei/" target="_">
							<i className="icon-linkedin" />
						</a>
					</li>
					<li>
						<a href="https://github.com/pixulainen" target="_">
							<i className="icon-github" />
						</a>
					</li>
					<li>
						<a
							href="https://mail.google.com/mail/?view=cm&fs=1&to=george.apetrei@gmail.com&su=Hi"
							target="_"
						>
							<i className="icon-mail4" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
