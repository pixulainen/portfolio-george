import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { useGetBlog, useUpdateBlog } from 'actions/blogs';
import { useRouter } from 'next/router';

const BlogUpdateEditor = ({ user, loading }) => {
	const router = useRouter();
	const { data } = useGetBlog(router.query.id);

	const [ updateBlog, { error, loading: isBlogLoading } ] = useUpdateBlog();

	const _updateBlog = async (data) => {
		await updateBlog(router.query.id, data);
		toast.success('Blog has been updated!');
	};
	if (error) {
		toast.error(error);
	}
	return (
		<BaseLayout user={user} loading={loading}>
			<BasePage>
				{data &&
				data.content && (
					<Editor
						loading={isBlogLoading}
						initialContent={data.content}
						header="Update your blog..."
						onSave={_updateBlog}
					/>
				)}
			</BasePage>
		</BaseLayout>
	);
};

export default withAuth(BlogUpdateEditor)('admin');
