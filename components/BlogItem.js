import Link from 'next/Link';
import moment from 'moment';

const BlogItem = ({ blog }) => {
	return (
		<div>
			<div className="post-preview clickable">
				<Link href="/blogs/[slug]" as={`/blogs/${blog.slug}`}>
					<a>
						<h2 className="post-title">{blog.title}</h2>
						<h3 className="post-subtitle">{blog.subtitle}</h3>
					</a>
				</Link>
				<p className="post-meta">
					Posted by
					<a href="#"> {blog.author.name} </a>
					{moment(blog.createdAt).format('LLLL')}
				</p>
			</div>
			<hr />
		</div>
	);
};

export default BlogItem;
