import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slate-simple-editor/dist/index.css';
import '@/styles/main.scss';

import 'react-datepicker/dist/react-datepicker.css';

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
