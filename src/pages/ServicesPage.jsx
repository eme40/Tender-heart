import React from 'react';
import { motion } from 'framer-motion';
import {
	BookOpen,
	Users,
	Heart,
	Award,
	Music,
	Palette,
	Calculator,
	Globe,
	Sparkles,
	Check,
	ArrowRight,
	Baby,
	GraduationCap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
	// Animation Variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	const fadeIn = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6 },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const scaleIn = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	const services = [
		{
			id: 1,
			icon: <BookOpen className='w-8 h-8' />,
			title: 'Academic Excellence',
			description:
				'Comprehensive curriculum covering all core subjects with innovative teaching methods that make learning engaging and effective.',
			features: [
				'British & Nigerian Curriculum',
				'Small Class Sizes',
				'Personalized Learning',
				'Regular Assessments',
			],
		},
		{
			id: 2,
			icon: <Users className='w-8 h-8' />,
			title: 'Character Development',
			description:
				'Building strong moral foundations through faith-based values, discipline, and compassionate guidance.',
			features: [
				'Biblical Principles',
				'Leadership Training',
				'Emotional Intelligence',
				'Life Skills',
			],
		},

		{
			id: 4,
			icon: <Music className='w-8 h-8' />,
			title: 'Creative Arts',
			description:
				'Fostering creativity and self-expression through music, drama, dance, and visual arts programs.',
			features: [
				'Music Lessons',
				'Drama & Theatre',
				'Art & Craft',
				'Performance Opportunities',
			],
		},
		{
			id: 5,
			icon: <Award className='w-8 h-8' />,
			title: 'Sports & Recreation',
			description:
				'Promoting physical fitness, teamwork, and healthy competition through diverse sporting activities.',
			features: [
				'Football & Athletics',
				'Swimming Lessons',
				'Inter-House Sports',
				'Fitness Programs',
			],
		},
	
		{
			id: 7,
			icon: <Globe className='w-8 h-8' />,
			title: 'Language Programs',
			description:
				'Building communication skills through English language mastery and introduction to other languages.',
			features: [
				'English Proficiency',
				'Reading Programs',
				'Public Speaking',
				'Creative Writing',
			],
		},
		{
			id: 8,
			icon: <Palette className='w-8 h-8' />,
			title: 'Extracurricular Activities',
			description:
				'Enriching learning experiences beyond the classroom through clubs, field trips, and special events.',
			features: [
				'Educational Excursions',
				'Special Events',
				'Competitions',
			],
		},
	];

	const educationLevels = [
		{
			title: 'Crèche',
			ageRange: 'Ages 0-2',
			icon: <Baby className='w-6 h-6' />,
			description:
				'Tender care and early stimulation for infants and toddlers, focusing on sensory development and foundational bonding.',
			highlights: [
				'Sensory Play',
				'Early Bonding',
				'Basic Motor Skills',
				'Safe Environment',
			],
		},
		{
			title: 'Nursery',
			ageRange: 'Ages 2-5',
			icon: <Users className='w-6 h-6' />,
			description:
				'Foundation years focusing on play-based learning, socialization, and early literacy skills in a nurturing environment.',
			highlights: [
				'Play-Based Learning',
				'Social Development',
				'Basic Numeracy & Literacy',
				'Creative Expression',
			],
		},
		{
			title: 'Primary',
			ageRange: 'Ages 5-11',
			icon: <GraduationCap className='w-6 h-6' />,
			description:
				'Comprehensive primary education building strong academic foundations, character development, and critical thinking skills.',
			highlights: [
				'Full Curriculum',
				'Critical Thinking',
				'Project-Based Learning',
				'Leadership Development',
			],
		},
	];

	return (
		<div className='font-poppins bg-white dark:bg-gray-950 overflow-hidden'>
			{/* Hero Section */}
			<section className='relative min-h-[80vh] flex items-center justify-center bg-linear-to-br from-bgPrimary via-[#0A3836] to-bgPrimary dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden'>
				{/* Animated Background */}
				<div className='absolute inset-0'>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.2, 0.3, 0.2],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className='absolute top-1/4 right-1/4 w-96 h-96 bg-textSecondary/20 rounded-full blur-3xl'
					/>
					<motion.div
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.1, 0.2, 0.1],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 1,
						}}
						className='absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-textPrimary/10 rounded-full blur-3xl'
					/>
				</div>

				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

				<div className='relative max-w-5xl mx-auto px-6 text-center space-y-8 py-20'>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='inline-flex items-center gap-2 px-6 py-3 bg-textPrimary/10 backdrop-blur-sm border border-textPrimary/20 rounded-full'>
						<Sparkles className='w-4 h-4 text-textSecondary' />
						<span className='text-sm font-medium text-textPrimary'>
							Holistic Education Excellence
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='text-5xl md:text-6xl lg:text-7xl font-bold text-textPrimary tracking-tight leading-tight'>
						Our <span className='text-textSecondary'>Services</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed'>
						Comprehensive programs designed to nurture every aspect of your
						child's development—academically, spiritually, socially, and
						physically
					</motion.p>
				</div>
			</section>

			{/* Services Grid */}
			<section className='py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'>
				<div className='max-w-7xl mx-auto px-6'>
					{/* Section Header */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={fadeInUp}
						className='text-center max-w-3xl mx-auto mb-20 space-y-4'>
						<h2 className='text-4xl md:text-5xl font-bold text-bgPrimary dark:text-textPrimary'>
							What We Offer
						</h2>
						<p className='text-xl text-gray-600 dark:text-gray-400'>
							A complete educational experience that goes beyond academics
						</p>
					</motion.div>

					{/* Services Grid */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-50px' }}
						variants={staggerContainer}
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service, index) => {
							const isPrimary = index % 2 === 0;
							const gradientClass = isPrimary
								? 'from-bgPrimary to-[#0A3836]'
								: 'from-textSecondary to-yellow-400';

							return (
								<motion.div
									key={service.id}
									variants={fadeInUp}
									whileHover={{ y: -8, transition: { duration: 0.3 } }}
									className='group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer'>
									{/* Gradient Background on Hover */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

									{/* Icon */}
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ duration: 0.3 }}
										className={`relative w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
										<div className='text-white'>{service.icon}</div>
									</motion.div>

									{/* Content */}
									<div className='relative space-y-4'>
										<h3 className='text-2xl font-bold text-bgPrimary dark:text-textPrimary'>
											{service.title}
										</h3>
										<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
											{service.description}
										</p>

										{/* Features */}
										<ul className='space-y-2 pt-2'>
											{service.features.map((feature, featureIndex) => (
												<motion.li
													key={featureIndex}
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{ delay: featureIndex * 0.1 }}
													viewport={{ once: true }}
													className='flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300'>
													<Check
														className={`w-4 h-4 shrink-0 ${
															isPrimary
																? 'text-bgPrimary'
																: 'text-textSecondary'
														}`}
													/>
													<span>{feature}</span>
												</motion.li>
											))}
										</ul>
									</div>

									{/* Decorative Element */}
									<div
										className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${gradientClass} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

									{/* Bottom accent line */}
									<div
										className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</section>

			{/* Education Levels */}
			<section className='py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'>
				<div className='max-w-7xl mx-auto px-6'>
					{/* Section Header */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={fadeInUp}
						className='text-center max-w-3xl mx-auto mb-20 space-y-6'>
						<div className='inline-flex items-center gap-2 px-6 py-3 bg-bgPrimary/10 dark:bg-textSecondary/10 rounded-full'>
							<BookOpen className='w-4 h-4 text-bgPrimary dark:text-textSecondary' />
							<span className='text-sm font-semibold text-bgPrimary dark:text-textSecondary uppercase tracking-wider'>
								Programs
							</span>
						</div>

						<h2 className='text-4xl md:text-5xl font-bold text-bgPrimary dark:text-textPrimary'>
							Education Levels
						</h2>

						<p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed'>
							Tailored programs for every stage of early childhood development
						</p>
					</motion.div>

					{/* 3-Column Grid */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-50px' }}
						variants={staggerContainer}
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{educationLevels.map((level, index) => {
							const isPrimary = index % 2 === 0;
							const gradientClass = isPrimary
								? 'from-bgPrimary to-[#0A3836]'
								: 'from-textSecondary to-yellow-400';

							return (
								<motion.div
									key={index}
									variants={scaleIn}
									whileHover={{ y: -8, transition: { duration: 0.3 } }}
									className='group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer'>
									{/* Gradient Background on Hover */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

									{/* Decorative Circle */}
									<div
										className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${gradientClass} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

									<div className='relative space-y-6'>
										{/* Icon Badge */}
										<motion.div
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ duration: 0.3 }}
											className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center shadow-lg`}>
											<div className='text-white'>{level.icon}</div>
										</motion.div>

										{/* Title & Age Range */}
										<div className='space-y-2'>
											<h3 className='text-2xl font-bold text-bgPrimary dark:text-textPrimary'>
												{level.title}
											</h3>
											<div className='inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full'>
												<span className='text-sm font-semibold text-gray-700 dark:text-gray-300'>
													{level.ageRange}
												</span>
											</div>
										</div>

										{/* Description */}
										<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
											{level.description}
										</p>

										{/* Divider */}
										<div className='h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent'></div>

										{/* Highlights */}
										<div className='space-y-3'>
											<h4 className='text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider'>
												Key Features
											</h4>
											<div className='space-y-2'>
												{level.highlights.map((highlight, i) => (
													<motion.div
														key={i}
														initial={{ opacity: 0, x: -10 }}
														whileInView={{ opacity: 1, x: 0 }}
														transition={{ delay: i * 0.1 }}
														viewport={{ once: true }}
														className='flex items-center gap-3'>
														<div
															className={`w-5 h-5 bg-gradient-to-br ${gradientClass} rounded-md flex items-center justify-center shrink-0`}>
															<Check className='w-3 h-3 text-white' />
														</div>
														<span className='text-sm text-gray-700 dark:text-gray-300'>
															{highlight}
														</span>
													</motion.div>
												))}
											</div>
										</div>
									</div>

									{/* Bottom Accent Line */}
									<div
										className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
								</motion.div>
							);
						})}
					</motion.div>

					{/* Call to Action */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInUp}
						className='mt-16 text-center'>
						<p className='text-gray-600 dark:text-gray-400 mb-6'>
							Not sure which program is right for your child?
						</p>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to='/contact'
								className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-bgPrimary to-[#0A3836] hover:from-[#0A3836] hover:to-bgPrimary text-textPrimary font-bold rounded-full transition-all duration-300 shadow-lg'>
								<span>Schedule a Consultation</span>
								<svg
									className='w-5 h-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17 8l4 4m0 0l-4 4m4-4H3'
									/>
								</svg>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

		

			{/* CTA Section */}
			<section className='relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
				<div className='absolute inset-0'>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.1, 0.15, 0.1],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className='absolute top-1/4 right-1/4 w-96 h-96 bg-textSecondary/10 rounded-full blur-3xl'
					/>
					<motion.div
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.05, 0.1, 0.05],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 1,
						}}
						className='absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-bgPrimary/5 rounded-full blur-3xl'
					/>
				</div>

				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={staggerContainer}
					className='relative max-w-5xl mx-auto px-6 text-center space-y-12'>
					<motion.div variants={fadeInUp} className='space-y-6'>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-bgPrimary dark:text-textPrimary leading-tight'>
							Ready to Experience{' '}
							<span className='text-textSecondary'>Excellence?</span>
						</h2>
						<p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light'>
							Schedule a campus tour or speak with our admissions team to learn
							more about our programs
						</p>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to='/contact'
								className='group px-10 py-5 bg-gradient-to-r from-bgPrimary to-[#0A3836] hover:from-[#0A3836] hover:to-bgPrimary text-textPrimary font-bold rounded-full transition-all duration-300 shadow-2xl hover:shadow-bgPrimary/30 flex items-center gap-3'>
								<span>Contact Us Today</span>
								<ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to='/about'
								className='px-10 py-5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-bgPrimary dark:text-textPrimary font-bold rounded-full transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-bgPrimary dark:hover:border-textSecondary shadow-lg'>
								Learn More About Us
							</Link>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
};

export default ServicesPage;
