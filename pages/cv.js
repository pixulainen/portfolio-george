import React from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const Cv = () => {
	const { data, loading } = useGetUser();

	return (
		<BaseLayout user={data} loading={loading}>
			<BasePage title="CV - George Apetrei">
				<Row>
					<Col md={{ size: 8, offset: 2 }}>
						<iframe style={{ width: '100%', height: '800px' }} src="/GeorgeApetrei_CV.pdf" />
					</Col>
				</Row>
			</BasePage>
		</BaseLayout>
	);
};

export default Cv;
