// PhotoGallery.jsx - Full Gallery View
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
	ChevronRight,
	ChevronLeft,
	X,
	Download,
	Share2,
	ArrowLeft,
} from 'lucide-react';
import {
	school_Activity,
	event,
	excursion,
	swimming,
} from '../service/images';

const categoryMap = {
	'Class Activities': school_Activity,
	Events: event,
	'Excursion': excursion,
	Swimming: swimming,
};

const PhotoGallery = () => {
	const location = useLocation();
	const category = location.state?.category;
	const images = categoryMap[category] || [];

	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	const openModal = (index) => setSelectedImageIndex(index);
	const closeModal = () => setSelectedImageIndex(null);

	const showPrevImage = () =>
		setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

	const showNextImage = () =>
		setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

	useEffect(() => {
		if (selectedImageIndex !== null) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [selectedImageIndex]);

	const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
	const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 75) showNextImage();
		if (touchEnd - touchStart > 75) showPrevImage();
	};

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-950'>
			{/* Header */}
			<section className='bg-linear-to-br from-bgPrimary to-[#0A3836] dark:from-gray-900 dark:to-gray-800 py-16'>
				<div className='max-w-7xl mx-auto px-6'>
					<Link
						to='/media/category'
						className='inline-flex items-center gap-2 text-textPrimary hover:text-textSecondary transition-colors mb-6 group'>
						<ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
						<span className='font-semibold'>Back to Categories</span>
					</Link>

					<div className='flex items-center justify-between'>
						<div>
							<h1 className='text-4xl md:text-5xl font-bold text-textPrimary mb-2'>
								{category}
							</h1>
							<p className='text-gray-300 text-lg'>
								{images.length} photos in this collection
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Grid */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-6'>
					{images.length === 0 ? (
						<div className='text-center py-20'>
							<p className='text-2xl text-gray-500 dark:text-gray-400'>
								No images in this category yet.
							</p>
						</div>
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{images.map((item, index) => (
								<div
									key={item.id}
									onClick={() => openModal(index)}
									className='group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
									<img
										src={item.img}
										alt={`${category} ${index + 1}`}
										className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 object-center'
									/>
									<div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<div className='absolute bottom-4 left-4 text-white'>
											<p className='text-sm font-semibold'>View Full Image</p>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Lightbox Modal */}
			{selectedImageIndex !== null && (
				<div className='fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
					{/* Close Button */}
					<button
						onClick={closeModal}
						className='absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50'>
						<X className='w-6 h-6 text-white' />
					</button>

					{/* Image Counter */}
					<div className='absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold z-50'>
						{selectedImageIndex + 1} / {images.length}
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={showPrevImage}
						className='absolute left-4 md:left-6 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50'>
						<ChevronLeft className='w-6 h-6 md:w-8 md:h-8 text-white' />
					</button>

					<button
						onClick={showNextImage}
						className='absolute right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50'>
						<ChevronRight className='w-6 h-6 md:w-8 md:h-8 text-white' />
					</button>

					{/* Image Container - UPDATED */}
					<div
						className='flex items-center justify-center w-full h-full max-w-6xl'
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}>
						<img
							src={images[selectedImageIndex].img}
							alt={`${category} ${selectedImageIndex + 1}`}
							className='max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default PhotoGallery;
