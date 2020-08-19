import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import { withAuth } from '@/utils/auth0';

const SecretSSr = ({ user, title }) => {
	return (
		<BaseLayout user={user} loading={false}>
			<BasePage>
				<h1>Secret page {user && user.name}</h1>
				<h2>{title}</h2>
			</BasePage>
		</BaseLayout>
	);
};

// export const getServerSideProps = async ({ req, res }) => {
// 	const user = await authorizeUser(req, res);
// 	return {
// 		props: { user }
// 	};
// };
const getTitle = () => {
	return new Promise((res) => {
		setTimeout(() => {
			res({ title: 'My new title' });
		}, 500);
	});
};
export const getServerSideProps = withAuth(async () => {
	const title = await getTitle();
	return title;
})();

export default SecretSSr;
