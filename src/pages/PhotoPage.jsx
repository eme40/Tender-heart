// PhotoPage.jsx - Media Type Selection
import React from 'react';
import img from '../assets/media/image.jpg';
import video from '../assets/media/video.jpg';
import { Link } from 'react-router-dom';
import { Image, Video, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PhotoPage = () => {
	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-950'>
			{/* Hero Section */}
			<section className='relative py-32 bg-linear-to-br from-bgPrimary via-[#0A3836] to-bgPrimary dark:from-gray-950 dark:to-gray-900 overflow-hidden'>
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
				
				<div className='relative max-w-4xl mx-auto px-6 text-center space-y-6'>
					<motion.div
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='inline-flex items-center gap-2 px-6 py-3 bg-textPrimary/10 backdrop-blur-sm border border-textPrimary/20 rounded-full'>
						<Sparkles className="w-4 h-4 text-textSecondary" />
						<span className="text-sm font-medium text-textPrimary">Capturing Moments, Creating Memories</span>
					</motion.div>
					
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', }}
						className='text-5xl md:text-6xl lg:text-7xl font-bold text-textPrimary tracking-tight'>
						Media <span className='text-textSecondary'>Gallery</span>
					</motion.h1>
					
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}	
						className='text-xl md:text-2xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto font-light'>
						Explore our collection of cherished moments and celebrations
					</motion.p>
				</div>
			</section>

			{/* Media Type Cards */}
			<section className='relative -mt-20 pb-32'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						
						{/* Photo Stories Card */}
						<Link to='/media/category'>
							<motion.div
								initial={{ opacity: 0, x: -40 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, ease: 'easeIn' }}
								className='group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-textSecondary/20 transition-all duration-500'>
								{/* Background Image */}
								<div 
									className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
									style={{ backgroundImage: `url(${img})` }}>
									<div className='absolute inset-0 bg-linear-to-t from-bgPrimary via-bgPrimary/80 to-bgPrimary/40 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900/60'></div>
								</div>

								{/* Content */}
								<div className='relative h-full flex flex-col justify-end p-10 text-textPrimary'>
									<div className='w-20 h-20 bg-textSecondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-textSecondary/30 transition-colors duration-300'>
										<Image className='w-10 h-10 text-textSecondary' />
									</div>
									
									<h2 className='text-4xl font-bold mb-4 group-hover:text-textSecondary transition-colors duration-300'>
										Photo Stories
									</h2>
									
									<p className='text-gray-300 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										Browse through our collection of memorable moments captured in beautiful photographs
									</p>
									
									<div className='flex items-center gap-2 text-textSecondary font-semibold'>
										<span>Explore Gallery</span>
										<ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
									</div>
								</div>

								{/* Shine Effect */}
								<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
									<div className='absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
								</div>
							</motion.div>
						</Link>

						{/* Video Stories Card */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: 'easeIn' }}
							className='group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-textSecondary/20 transition-all duration-500 cursor-not-allowed opacity-75'>
							{/* Background Image */}
							<div 
								className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
								style={{ backgroundImage: `url(${video})` }}>
								<div className='absolute inset-0 bg-linear-to-t from-bgPrimary via-bgPrimary/80 to-bgPrimary/40 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900/60'></div>
							</div>

							{/* Content */}
							<div className='relative h-full flex flex-col justify-end p-10 text-textPrimary'>
								<div className='w-20 h-20 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6'>
									<Video className='w-10 h-10 text-purple-400' />
								</div>
								
								<h2 className='text-4xl font-bold mb-4'>
									Video Stories
								</h2>
								
								<div className='inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full w-fit'>
									<span className='text-sm font-medium text-yellow-300'>Coming Soon</span>
								</div>
							</div>
						</motion.div>

					</div>
				</div>
			</section>
		</div>
	);
};

export default PhotoPage;