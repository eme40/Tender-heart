import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
	return (
		<div className='min-h-screen flex flex-col debug-screen dark:bg-gray-900 overflow-x-hidden'>
			<Navbar />

			{/* Toast container (GLOBAL) */}
      <ToastContainer
        theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				pauseOnHover
				draggable
			/>

			<main className='flex-1'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
