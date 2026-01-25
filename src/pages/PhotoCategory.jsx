// PhotoCategory.jsx - Category Selection
import { Link } from 'react-router-dom';
import { Image, ArrowRight } from 'lucide-react';
import {
	school_Activity,

	event,
	excursion,
	swimming,
} from '../service/images';

const PhotoCategory = () => {
	const categories = [
		{ name: 'Class Activities', color: 'from-blue-500 to-cyan-500' },
		{ name: 'Events', color: 'from-orange-500 to-red-500' },
		{ name: 'Excursion', color: 'from-indigo-500 to-purple-500' },
		{ name: 'Swimming', color: 'from-cyan-500 to-blue-500' },
	];

	const categoryMap = {
		'Class Activities': school_Activity,
		Events: event,
		'Excursion': excursion,
		Swimming: swimming,
	};

	return (
		<div className='min-h-screen bg-white dark:bg-gray-950'>
			{/* Hero */}
			<section
				style={{ backgroundImage: `url(${'https://res.cloudinary.com/ddad0j57l/image/upload/v1769298434/Design/media/catego_cuennt.jpg'})` }}
				className='relative h-[400px] bg-cover bg-center flex items-center justify-center'>
				<div className='absolute inset-0 bg-linear-to-b from-bgPrimary/80 via-bgPrimary/70 to-bgPrimary/80 dark:from-gray-900/90 dark:to-gray-900/90'></div>
				<div className='relative text-center space-y-4'>
					<h1 className='text-5xl md:text-6xl font-bold text-textPrimary'>
						Photo <span className='text-textSecondary'>Categories</span>
					</h1>
					<p className='text-xl text-gray-300'>Choose a category to explore</p>
				</div>
			</section>

			{/* Categories Grid */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{categories.map((category, i) => {
							const images = categoryMap[category.name] || [];
							const imageCount = images.length;

							return (
								<Link
									key={i}
									to='/media/gallery'
									state={{ category: category.name }}
									className='group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
									{/* Image Stack Preview */}
									<div className='relative h-80 overflow-hidden'>
										{images.slice(0, 3).map((item, index) => (
											<div
												key={item.id}
												className='absolute w-full h-full transition-all duration-500'
												style={{
													top: '50%',
													left: '50%',
													transform: `translate(-50%, -50%) translateY(${
														index * 8
													}px) scale(${1 - index * 0.05})`,
													opacity: 1 - index * 0.2,
													zIndex: 3 - index,
												}}>
												<img
													src={item.img}
													alt={category.name}
													className='w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700'
												/>
												{index === 0 && (
													<div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent'></div>
												)}
											</div>
										))}
									</div>

									{/* Content Overlay */}
									<div className='absolute bottom-0 left-0 right-0 p-6 text-textPrimary z-10'>
										<div
											className={`inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r ${category.color} rounded-full mb-3 shadow-lg`}>
											<Image className='w-4 h-4' />
											<span className='text-sm font-semibold'>
												{imageCount} Photos
											</span>
										</div>

										<h3 className='text-2xl font-bold mb-2'>{category.name}</h3>

										<div className='flex items-center gap-2 text-textSecondary opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<span className='font-semibold'>View Gallery</span>
											<ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform' />
										</div>
									</div>

									{/* Border Gradient */}
									<div
										className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
										<div
											className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-20`}></div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default PhotoCategory;
