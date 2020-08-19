import React, { Children } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, ...props }) => {
	const router = useRouter();
	const child = Children.only(children);
	let className = child.props.className || '';

	if (router.asPath === props.href && props.activeClassname) {
		className = `${className} ${props.activeClassname}`;
	}
	delete props.activeClassname;
	return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
