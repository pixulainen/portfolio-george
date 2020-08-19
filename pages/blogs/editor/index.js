import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from 'actions/blogs';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const BlogEditor = ({ user, loading }) => {
	const router = useRouter();
	const [ createBlog, { data: createdBlog, error, loading: blogLoading } ] = useCreateBlog();

	const saveBlog = async (data) => {
		const createdBlog = await createBlog(data);
		router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`);
	};
	if (error) {
		toast.error(error);
	}
	return (
		<BaseLayout user={user} loading={loading}>
			<BasePage>
				<Editor loading={blogLoading} header="Write your blog..." onSave={saveBlog} />
			</BasePage>
		</BaseLayout>
	);
};

export default withAuth(BlogEditor)('admin');