import React, { useState, useRef, useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import { useGetUser } from '@/actions/user';
import BasePage from 'components/BasePage';

const ROLES = [ 'Full Stack Developer', 'Tech-Entusiast', 'Software Engineer', 'React.js' ];
const Index = () => {
	const { data, loading } = useGetUser();

	return (
		<BaseLayout user={data} loading={loading} className={`cover `} navClass="transparent">
			<BasePage indexPage title="George Apetrei">
				<div className="main-section">
					<Container fluid>
						<Row>
							<Col md="6">
								<div className="hero-section">
									<div className="">
										<div className="front">
											<div className="image image-1">
												<div className="hero-section-content">
													<h2> Full Stack Web Developer </h2>
													<div className="hero-section-content-intro">
														Have a look at my portfolio and job history.
													</div>
												</div>
											</div>
											<div className="shadow-custom">
												<div className="shadow-inner"> </div>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md="6" className="hero-welcome-wrapper">
								<div className="hero-welcome-text">
									<h1>Welcome to the portfolio website of George Apetrei. Pleased to e-meet you!</h1>
								</div>
								<Typed
									loop
									typeSpeed={60}
									backSpeed={60}
									strings={ROLES}
									backDelay={1000}
									loopCount={0}
									showCursor
									className="self-typed"
									cursorChar="|"
								/>
								<div className="hero-welcome-bio">
									<h1>Let's take a look on my work.</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</BasePage>
		</BaseLayout>
	);
};

export default Index;
