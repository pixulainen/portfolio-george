import Header from '@/components/shared/Header';
import { ToastContainer } from 'react-toastify';
import Footer from 'components/shared/Footer';

const BaseLayout = (props) => {
	const { className, children, navClass = 'with-bg', user, loading } = props;
	return (
		<div className="layout-container">
			<Header user={user} loading={loading} className={navClass} />
			<main className={`cover ${className}`}>
				<div className="wrapper">{children}</div>
				<Footer />
			</main>
			<ToastContainer />
		</div>
	);
};
export default BaseLayout;
