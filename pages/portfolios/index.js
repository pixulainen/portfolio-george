import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import { isAuthorized } from '@/utils/auth0';
import { Row, Col, Button } from 'reactstrap';
import PortfolioCard from '../../components/PortfolioCard';
import { useRouter } from 'next/router';
import { useDeletePortfolio } from '../../actions/portfolios';
import { useState } from 'react';

const Portfolios = ({ portfolios: initialPortfolios }) => {
	const router = useRouter();
	const [ portfolios, setPortfolios ] = useState(initialPortfolios);
	const [ deletePortfolio, { data, error } ] = useDeletePortfolio();
	const { data: dataU, loading: loadingU } = useGetUser();

	const _deletePortfolio = async (e, portfolioId) => {
		e.stopPropagation();
		const isConfirm = confirm('Are you sure you want to delete this portfolio?');
		if (isConfirm) {
			await deletePortfolio(portfolioId);
			const newPortfolios = portfolios.filter((portfolio) => portfolio._id !== portfolioId);
			setPortfolios(newPortfolios);
		}
	};
	return (
		<BaseLayout user={dataU} loading={loadingU}>
			<BasePage title="Newest Portfolios - George Apetrei" header="Portfolios" className="portfolio-page">
				<Row>
					{portfolios.map((portfolio) => (
						<Col
							onClick={() => router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)}
							key={portfolio._id}
							md="4"
						>
							<PortfolioCard portfolio={portfolio}>
								{dataU &&
								isAuthorized(dataU, 'admin') && (
									<React.Fragment>
										<Button
											onClick={(e) => {
												e.stopPropagation();
												router.push(
													'/portfolios/[id]/edit',
													`/portfolios/${portfolio._id}/edit`
												);
											}}
											className="mr-2"
											color="warning"
										>
											Edit
										</Button>
										<Button onClick={(e) => _deletePortfolio(e, portfolio._id)} color="danger">
											Delete
										</Button>
									</React.Fragment>
								)}
							</PortfolioCard>
						</Col>
					))}
				</Row>
			</BasePage>
		</BaseLayout>
	);
};
export async function getStaticProps() {
	const json = await new PortfolioApi().getAll();
	const portfolios = json.data;
	return {
		props: { portfolios },
		revalidate: 1
	};
}
export default Portfolios;
