import React from 'react';

import { MoveRight, Quote, MoveLeft, Star } from 'lucide-react';
import { services, testmonials } from '../service/data';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const LandingPage = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	// Animation Variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: -60 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const fadeInRight = {
		hidden: { opacity: 0, x: 60 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const scaleIn = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<div className='text-white font-poppins min-h-screen dark:bg-gray-900'>
			{/* Hero Section */}
			<section className='relative bg-bgPrimary dark:bg-linear-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen px-4 md:px-6 lg:px-8 flex items-center justify-center py-12 md:py-20'>
				{/* Decorative Elements - Smaller on mobile */}
				<div className='absolute inset-0 overflow-hidden pointer-events-none'>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className='absolute top-10 md:top-20 right-5 md:right-10 w-40 md:w-72 h-40 md:h-72 bg-textSecondary/5 dark:bg-textSecondary/10 rounded-full blur-3xl'></motion.div>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.4 }}
						className='absolute bottom-10 md:bottom-20 left-5 md:left-10 w-48 md:w-96 h-48 md:h-96 bg-white/5 dark:bg-white/10 rounded-full blur-3xl'></motion.div>
				</div>

				{/* Grid */}
				<div className='relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 lg:gap-16 w-full max-w-6xl'>
					{/* Text Section */}
					<div className='flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6'>
						<div className='space-y-3 md:space-y-4'>
							<motion.h1
								initial={{ opacity: 0, y: -60 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-textPrimary'>
								Strengthened by Faith, Shaped{' '}
								<span className='text-textSecondary inline-block'>
									for Leadership
								</span>
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 60 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className='text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0'>
								At Tender Heart, we help every child grow in faith, build strong
								values, and lead with excellence — shaping confident learners
								ready to make a difference.
							</motion.p>
						</div>

						{/* CTA Button */}
						<motion.div
							initial={{ opacity: 0, y: 60 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='flex justify-center md:justify-start pt-2'>
							<Link
								to='/about'
								className='group flex items-center gap-2 md:gap-3 bg-textPrimary dark:bg-gray-800 hover:bg-textSecondary dark:hover:bg-textSecondary transition-all duration-300 rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 shadow-lg hover:shadow-xl hover:scale-105'>
								<div className='bg-bgPrimary dark:bg-textSecondary group-hover:bg-textPrimary dark:group-hover:bg-textPrimary transition-colors duration-300 rounded-full p-2 md:p-2.5'>
									<MoveRight className='w-4 h-4 md:w-5 md:h-5 text-textPrimary group-hover:text-bgPrimary dark:group-hover:text-bgPrimary transition-colors duration-300' />
								</div>
								<span className='font-semibold text-sm md:text-base text-bgPrimary dark:text-textPrimary group-hover:text-textPrimary dark:group-hover:text-bgPrimary transition-colors duration-300'>
									Explore More
								</span>
							</Link>
						</motion.div>

						{/* Trust Indicators - Adjusted for mobile */}
						<motion.div
							variants={containerVariants}
							initial='hidden'
							animate={inView ? 'visible' : 'hidden'}
							ref={ref}
							className='flex items-center justify-center md:justify-start gap-4 md:gap-8 pt-3 md:pt-4 text-gray-300 dark:text-gray-300'>
							<motion.div
								variants={itemVariants}
								className='text-center md:text-left'>
								<p className='text-xl md:text-2xl font-bold text-textPrimary dark:text-textPrimary'>
									{inView && <CountUp start={0} end={10} duration={2} />}+
								</p>
								<p className='text-xs md:text-sm'>Years Experience</p>
							</motion.div>
							<div className='w-px h-10 md:h-12 bg-gray-600 dark:bg-gray-600'></div>
							<motion.div
								variants={itemVariants}
								className='text-center md:text-left'>
								<p className='text-xl md:text-2xl font-bold text-textPrimary dark:text-textPrimary'>
									{inView && <CountUp start={0} end={500} duration={2.5} />}+
								</p>
								<p className='text-xs md:text-sm'>Happy Students</p>
							</motion.div>
							<div className='w-px h-10 md:h-12 bg-gray-600 dark:bg-gray-600'></div>
							<motion.div
								variants={itemVariants}
								className='text-center md:text-left'>
								<p className='text-xl md:text-2xl font-bold text-textPrimary dark:text-textPrimary'>
									{inView && <CountUp start={0} end={100} duration={3} />}%
								</p>
								<p className='text-xs md:text-sm'>Secured Environment</p>
							</motion.div>
						</motion.div>
					</div>

					{/* Image Section - Adjusted aspect ratio for mobile */}
					<motion.div
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className='relative w-full max-w-lg mx-auto md:mx-0 md:order-last'>
						<div className='relative aspect-square md:aspect-square'>
							<img
								className='w-full h-full object-cover rounded-2xl shadow-2xl'
								src='https://res.cloudinary.com/ddad0j57l/image/upload/v1769296668/Design/Hero/heroImage_bzvsws.jpg'
								alt='Students at Tender Heart School learning and growing together'
							/>
							<div className='absolute inset-0 rounded-2xl ring-2 md:ring-4 ring-textSecondary/20 dark:ring-textSecondary/30 ring-offset-2 md:ring-offset-4 ring-offset-bgPrimary dark:ring-offset-gray-900'></div>

							{/* Floating Badge - Smaller on mobile */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1, duration: 0.6 }}
								className='absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-textPrimary dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-xl p-3 md:p-4 max-w-[160px] md:max-w-[200px]'>
								<div className='flex items-center gap-2 md:gap-3'>
									<div className='w-10 h-10 md:w-12 md:h-12 bg-textSecondary/10 dark:bg-textSecondary/20 rounded-full flex items-center justify-center'>
										<svg
											className='w-5 h-5 md:w-6 md:h-6 text-textSecondary'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
										</svg>
									</div>
									<div>
										<p className='text-xs md:text-sm font-bold text-bgPrimary dark:text-textSecondary'>
											Values-Driven
										</p>
										<p className='text-[10px] md:text-xs text-gray-600 dark:text-gray-300'>
											Excellence
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Proprietress Message */}
			<section className='bg-linear-to-b from-white to-[#F3F7FB] dark:from-gray-900 dark:to-gray-800 py-20 px-6'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center'>
						{/* IMAGE SIDE */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, margin: '-100px' }}
							variants={fadeInLeft}
							className='flex flex-col items-center text-center space-y-4 md:order-first lg:order-first'>
							<div className='relative'>
								<img
									className='w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl object-top object-cover shadow-xl'
									src='https://res.cloudinary.com/ddad0j57l/image/upload/v1769297741/Design/proprietress/WhatsApp_Image_2025-12-31_at_5.02.22_PM_bvqb3v.jpg'
									alt='Mrs. Chukwuemeka Edith O., Proprietress of Tender Heart'
								/>
								<div className='absolute inset-0 rounded-2xl ring-4 ring-bgPrimary/10 dark:ring-textSecondary/20'></div>
							</div>
							<div className='pt-2'>
								<p className='text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide'>
									Mrs. Chukwuemeka Edith O.
								</p>
								<p className='text-lg font-semibold text-bgPrimary dark:text-textSecondary mt-1'>
									Proprietress
								</p>
							</div>
						</motion.div>

						{/* TEXT SIDE */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, margin: '-100px' }}
							variants={fadeInRight}
							className='md:col-span-1 lg:col-span-2 space-y-6 md:order-last lg:order-last'>
							<div className='space-y-2'>
								<h2 className='text-3xl md:text-4xl font-semibold text-bgPrimary dark:text-gray-100'>
									Proprietress' Message
								</h2>
								<div className='w-20 h-1 bg-bgPrimary dark:bg-textSecondary'></div>
							</div>

							<div className='space-y-4 text-base md:text-lg'>
								<p className='text-gray-700 dark:text-gray-300 leading-relaxed '>
									With arms spread wide, we extend a heartfelt welcome to you
									and your precious little ones to our dedicated school. At
									Tender Heart, we are committed to creating an environment
									where every child feels safe, valued, and inspired to grow.
								</p>
								<p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
									Our school is thoughtfully designed with a robust security
									system and modern facilities to ensure a safe, nurturing, and
									conducive atmosphere for learning.
								</p>
								<p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
									Here, your children will be guided by caring and qualified
									educators who are passionate about helping them discover their
									unique gifts and potential.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Why Choose Section */}
			<section className='relative bg-[#F3F7FB] dark:bg-gray-900 py-20'>
				<div className='max-w-6xl mx-auto px-6 relative'>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-3xl font-semibold text-bgPrimary dark:text-gray-100 text-center mb-16'>
						Why Choose Tender Heart?
					</motion.h2>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center'>
						{/* LEFT TEXT SIDE */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, margin: '-100px' }}
							variants={containerVariants}
							className='space-y-8 md:space-y-12'>
							{[
								{
									title: 'Safe & Nurturing Environment',
									text: 'We provide a secure, structured and emotionally supportive atmosphere where every child feels seen, respected and encouraged to explore their full potential.',
								},
								{
									title: 'Faith-Inspired Values',
									text: 'We intentionally infuse character, discipline, compassion and strong moral foundations into everyday learning — shaping children who lead with integrity.',
								},
								{
									title: 'Holistic Education',
									text: 'Beyond academics — we nurture creativity, critical thinking, communication skills and emotional intelligence so every child develops confidence in every area of life.',
								},
								{
									title: 'Caring & Experienced Educators',
									text: 'Our educators are trained, passionate and deeply intentional about helping each child progress at a healthy pace — with personalised attention where needed.',
								},
							].map((item, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									className='group'>
									<div className='flex items-start gap-4'>
										<div className='w-12 h-12 rounded-full bg-bgPrimary/10 dark:bg-textSecondary/20 flex items-center justify-center shrink-0 mt-1'>
											<div className='w-3 h-3 rounded-full bg-bgPrimary dark:bg-textSecondary'></div>
										</div>
										<div className='flex-1'>
											<h4 className='text-xl font-semibold text-bgPrimary dark:text-gray-100 mb-2'>
												{item.title}
											</h4>
											<p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
												{item.text}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* RIGHT SIDE IMAGE */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='relative hidden md:block h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl'>
							<img
								src='https://res.cloudinary.com/ddad0j57l/image/upload/v1769299162/Design/why%20choose%20us/Teaching-pana_1_at9jxl.png'
								alt='Tender Heart educator with students'
								className='w-full h-full object-cover'
							/>
							<div className='absolute inset-0 bg-linear-to-t from-bgPrimary/20 dark:from-gray-900/40 to-transparent'></div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* The Tender Heart Advantage */}
			<section className='bg-white dark:bg-gray-800 py-20 px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInUp}
						className='text-center space-y-4 mb-16'>
						<h2 className='text-3xl md:text-4xl font-semibold text-bgPrimary dark:text-gray-100'>
							The Tender Heart Advantage
						</h2>
						<p className='text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed'>
							More than academics — we're shaping confident, creative, and
							emotionally intelligent children ready for tomorrow.
						</p>
					</motion.div>

					{/* Cards Grid */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={containerVariants}
						className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((item) => (
							<motion.div
								key={item.id}
								variants={itemVariants}
								className='group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-bgPrimary dark:hover:border-textSecondary rounded-2xl p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
								<div className='w-16 h-16 bg-bgPrimary/10 dark:bg-textSecondary/20 group-hover:bg-bgPrimary dark:group-hover:bg-textSecondary rounded-2xl flex items-center justify-center transition-all duration-300'>
									<img
										className='w-8 h-8 group-hover:scale-110 transition-transform duration-300'
										src={item.icon}
										alt={`${item.title} icon`}
									/>
								</div>

								<div className='space-y-2'>
									<h3 className='text-xl font-semibold text-bgPrimary dark:text-gray-100 group-hover:text-bgPrimary dark:group-hover:text-textSecondary transition-colors'>
										{item.title}
									</h3>
									<p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
										{item.value}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Testimonials */}
			<section className='px-6 py-20 text-gray-900 dark:text-gray-100 max-w-7xl mx-auto'>
				{/* Header */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={containerVariants}
					className='text-center space-y-6 mb-16'>
					<motion.div
						variants={fadeInUp}
						className='inline-flex items-center gap-2 px-6 py-3 bg-bgPrimary/10 dark:bg-textSecondary/10 rounded-full'>
						<Quote className='w-4 h-4 text-bgPrimary dark:text-textSecondary' />
						<span className='text-sm font-semibold text-bgPrimary dark:text-textSecondary uppercase tracking-wider'>
							Testimonials
						</span>
					</motion.div>

					<motion.h2
						variants={fadeInUp}
						className='text-4xl md:text-5xl font-bold text-bgPrimary dark:text-textPrimary'>
						What Parents <span className='text-textSecondary'>Are Saying</span>
					</motion.h2>

					<motion.p
						variants={fadeInUp}
						className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
						Real stories from families who have experienced the Tender Heart
						difference
					</motion.p>
				</motion.div>

				{/* SWIPER */}
				<div className='max-w-6xl mx-auto relative'>
					<Swiper
						modules={[Navigation, Autoplay]}
						spaceBetween={24}
						slidesPerView={1}
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						navigation={{
							nextEl: '.testimonial-next',
							prevEl: '.testimonial-prev',
						}}
						breakpoints={{
							640: { slidesPerView: 1, spaceBetween: 16 },
							768: { slidesPerView: 2, spaceBetween: 20 },
							1024: { slidesPerView: 3, spaceBetween: 24 },
						}}
						loop
						className='py-8 px-4'>
						{testmonials.map((item) => (
							<SwiperSlide key={item.id}>
								<div className='group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden cursor-pointer'>
									<div
										className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
									<div className='absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10'>
										<Quote className='w-full h-full text-bgPrimary dark:text-textSecondary rotate-12' />
									</div>

									<div className='relative z-10 space-y-6'>
										<div className='flex gap-1'>
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className='w-5 h-5 fill-textSecondary text-textSecondary'
												/>
											))}
										</div>

										<p className='text-gray-700 dark:text-gray-300 leading-relaxed text-base min-h-[120px]'>
											"{item.message}"
										</p>

										<div className='h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent'></div>

										<div className='flex items-center gap-4'>
											<div className='relative'>
												<div
													className={`absolute inset-0 bg-linear-to-br ${item.gradient} rounded-full blur opacity-30`}></div>
												<img
													className='relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-lg'
													src={item.img}
													alt={item.name}
												/>
											</div>
											<div className='flex-1'>
												<h5 className='font-bold text-base text-bgPrimary dark:text-textPrimary'>
													{item.name}
												</h5>
												<p className='text-sm text-gray-600 dark:text-gray-400'>
													{item.role}
												</p>
											</div>
										</div>
									</div>

									<div
										className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<div className='flex justify-center gap-4 mt-12'>
						<button className='testimonial-prev cursor-pointer w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-bgPrimary dark:hover:border-textSecondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group'>
							<MoveLeft className='w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-bgPrimary dark:group-hover:text-textSecondary transition-colors' />
						</button>
						<button className='testimonial-next cursor-pointer w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-bgPrimary dark:hover:border-textSecondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group'>
							<MoveRight className='w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-bgPrimary dark:group-hover:text-textSecondary transition-colors' />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
