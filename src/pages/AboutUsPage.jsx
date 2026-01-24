import React from 'react';
import {
	Heart,
	Target,
	Compass,
	Award,
	Sparkles,
	BookOpen,
	Users,
} from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	// Animation Variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	const fadeInDown = {
		hidden: { opacity: 0, y: -60 },
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

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const staggerItem = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<div className='font-poppins w-full bg-white dark:bg-gray-950 overflow-hidden'>
			{/* Hero Section - Ultra Modern */}
			<section className='relative min-h-screen flex items-center justify-center bg-linear-to-br from-bgPrimary via-[#0A3836] to-bgPrimary dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-textPrimary overflow-hidden'>
				{/* Animated Background Elements */}
				<div className='absolute inset-0'>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className='absolute top-1/4 right-1/4 w-96 h-96 bg-textSecondary/20 rounded-full blur-3xl animate-pulse'></motion.div>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.4 }}
						className='absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-textPrimary/10 rounded-full blur-3xl animate-pulse'></motion.div>
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.6 }}
						className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-textSecondary/10 rounded-full blur-3xl'></motion.div>
				</div>

				{/* Grid Pattern Overlay */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

				<div className='relative max-w-7xl mx-auto px-6 py-32 text-center space-y-12 z-10'>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className='inline-flex items-center gap-2 px-6 py-3 bg-textPrimary/10 backdrop-blur-sm border border-textPrimary/20 rounded-full'>
						<Sparkles className='w-4 h-4 text-textSecondary' />
						<span className='text-sm font-medium text-textPrimary'>
							Nurturing Excellence Since 2012
						</span>
					</motion.div>

					{/* Main Heading */}
					<motion.div
						initial='hidden'
						animate='visible'
						variants={staggerContainer}
						className='space-y-6'>
						<motion.h1
							variants={fadeInUp}
							className='text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight'>
							About{' '}
							<span className='bg-linear-to-r from-textSecondary via-yellow-300 to-textSecondary bg-clip-text text-transparent'>
								Tender Heart
							</span>
						</motion.h1>
						<motion.p
							variants={fadeInUp}
							className='text-xl md:text-2xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light'>
							Where faith meets excellence, and every child's potential is
							unlocked through compassionate, world-class education
						</motion.p>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 1.2 }}
						className='pt-12'>
						<div className='inline-flex flex-col items-center gap-2 text-textPrimary/60'>
							<span className='text-xs uppercase tracking-wider'>
								Scroll to explore
							</span>
							<div className='w-6 h-10 border-2 border-textPrimary/30 rounded-full p-1'>
								<div className='w-1.5 h-3 bg-textSecondary rounded-full animate-bounce'></div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Stats Bar */}
			<motion.section
				initial={{ opacity: 0, y: 60 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className='relative -mt-20 z-20'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-12'>
						<div ref={ref} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className='text-center space-y-2'>
								<div className='text-5xl font-bold bg-linear-to-r from-bgPrimary to-[#0A3836] bg-clip-text text-transparent'>
									{inView && <CountUp start={0} end={10} duration={2} />}+
								</div>
								<div className='text-gray-600 dark:text-gray-400 font-medium'>
									Years of Excellence
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className='text-center space-y-2 border-x border-gray-200 dark:border-gray-800'>
								<div className='text-5xl font-bold bg-linear-to-r from-textSecondary to-yellow-300 bg-clip-text text-transparent'>
									{inView && <CountUp start={0} end={500} duration={2.5} />}+
								</div>
								<div className='text-gray-600 dark:text-gray-400 font-medium'>
									Lives Transformed
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className='text-center space-y-2'>
								<div className='text-5xl font-bold bg-linear-to-r from-bgPrimary to-[#0A3836] bg-clip-text text-transparent'>
									{inView && <CountUp start={0} end={100} duration={2.5} />}%
								</div>
								<div className='text-gray-600 dark:text-gray-400 font-medium'>
									Secured Environment
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* OUR STORY - Bento Box Style */}
			<section className='py-32 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
						{/* Floating Card - Title */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, margin: '-100px' }}
							variants={fadeInLeft}
							className='lg:col-span-5 space-y-6'>
							<div className='sticky top-24'>
								<div className='bg-linear-to-br from-bgPrimary to-[#0A3836] dark:from-gray-900 dark:to-gray-800 rounded-3xl p-10 text-textPrimary shadow-2xl'>
									<div className='w-20 h-20 bg-textSecondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6'>
										<Heart className='w-10 h-10 text-textSecondary' />
									</div>
									<h2 className='text-5xl font-bold mb-4'>Our Story</h2>
									<div className='w-24 h-1.5 bg-textSecondary rounded-full mb-6'></div>
									<p className='text-gray-300 text-md'>
										A divine journey of faith, love, and educational excellence
									</p>
								</div>
							</div>
						</motion.div>

						{/* Content Cards */}
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, margin: '-100px' }}
							variants={staggerContainer}
							className='lg:col-span-7 space-y-6'>
							<motion.div
								variants={staggerItem}
								className='bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300'>
								<div className='flex items-start gap-4 mb-4 cursor-pointer'>
									<div className='w-12 h-12 bg-textSecondary/10 rounded-xl flex items-center justify-center shrink-0'>
										<BookOpen className='w-6 h-6 text-textSecondary' />
									</div>
									<div>
										<h3 className='text-2xl font-bold text-bgPrimary dark:text-textPrimary mb-2'>
											The Beginning
										</h3>
										<p className='text-gray-700 dark:text-gray-300 leading-relaxed text-md'>
											Tender Heart began in 2012 as a divine inspiration — an
											instruction from the Holy Spirit to develop not just a
											ministry of faith, but a safe and wholesome environment
											where young hearts could grow in love, wisdom, and
											excellence.
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								variants={staggerItem}
								className='bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300'>
								<div className='flex items-start gap-4 mb-4 cursor-pointer'>
									<div className='w-12 h-12 bg-bgPrimary/10 rounded-xl flex items-center justify-center shrink-0'>
										<Users className='w-6 h-6 text-bgPrimary dark:text-textSecondary' />
									</div>
									<div>
										<h3 className='text-2xl font-bold text-bgPrimary dark:text-textPrimary mb-2'>
											Our Philosophy
										</h3>
										<p className='text-gray-700 dark:text-gray-300 leading-relaxed text-md'>
											True to our name, Tender Heart reflects compassion,
											patience, and intentional care. We believe learning
											thrives where love and discipline coexist, and where every
											child feels seen, guided, and inspired.
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								variants={staggerItem}
								className='bg-linear-to-br from-textSecondary/10 to-yellow-100/50 dark:from-textSecondary/5 dark:to-yellow-900/20 rounded-3xl p-8 md:p-10 shadow-lg border border-textSecondary/20 hover:shadow-2xl transition-all duration-300'>
								<div className='flex items-start gap-4 mb-4 cursor-pointer'>
									<div className='w-12 h-12 bg-textSecondary/20 rounded-xl flex items-center justify-center shrink-0'>
										<Award className='w-6 h-6 text-textSecondary' />
									</div>
									<div>
										<h3 className='text-2xl font-bold text-bgPrimary dark:text-textPrimary mb-2'>
											Today & Beyond
										</h3>
										<p className='text-gray-700 dark:text-gray-300 leading-relaxed text-md'>
											By God's grace, Tender Heart received full government
											approval and continues to provide strong early-years and
											primary education. Our classrooms are warm, our teachers
											passionate, and our values rooted in faith, excellence,
											and holistic development.
										</p>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* VISION & MISSION - Split Screen */}
			<section className='relative py-0'>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					{/* Vision Side */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInLeft}
						className='bg-white dark:bg-gray-950 p-12 md:p-20 flex items-center'>
						<div className='max-w-xl mx-auto space-y-8'>
							<div className='inline-flex items-center gap-3 px-5 py-2 bg-bgPrimary/10 dark:bg-textSecondary/10 rounded-full'>
								<Target className='w-5 h-5 text-bgPrimary dark:text-textSecondary' />
								<span className='text-sm font-semibold text-bgPrimary dark:text-textSecondary uppercase tracking-wider'>
									Our Vision
								</span>
							</div>

							<h2 className='text-4xl md:text-5xl font-bold text-bgPrimary dark:text-textPrimary leading-tight'>
								Shaping Tomorrow's Leaders
							</h2>

							<div className='h-1 w-20 bg-linear-to-r from-textSecondary to-yellow-300 rounded-full'></div>

							<p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium'>
								To raise confident, compassionate, and God-fearing children
								equipped with strong character, sound knowledge, and a tender
								heart to impact their world positively.
							</p>
						</div>
					</motion.div>

					{/* Mission Side */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInRight}
						className='bg-linear-to-br from-bgPrimary via-[#0A3836] to-bgPrimary dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-12 md:p-20 flex items-center text-textPrimary'>
						<div className='max-w-xl mx-auto space-y-8'>
							<div className='inline-flex items-center gap-3 px-5 py-2 bg-textPrimary/10 backdrop-blur-sm rounded-full border border-textPrimary/20'>
								<Compass className='w-5 h-5 text-textSecondary' />
								<span className='text-sm font-semibold text-textSecondary uppercase tracking-wider'>
									Our Mission
								</span>
							</div>

							<h2 className='text-4xl md:text-5xl font-bold leading-tight'>
								Nurturing With Purpose
							</h2>

							<div className='h-1 w-20 bg-textSecondary rounded-full'></div>

							<p className='text-lg text-gray-300 dark:text-gray-400 leading-relaxed font-medium'>
								At Tender Heart, our mission is to provide a warm,
								faith-inspired learning environment where every child feels
								loved, valued, and supported. We cultivate excellence,
								creativity, and godly character through discipline, integrity,
								and compassion.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CORE VALUES - Modern Card Grid */}
			<section className='py-32 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-6'>
					{/* Section Header */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={staggerContainer}
						className='text-center max-w-3xl mx-auto mb-20 space-y-6'>
						<motion.div
							variants={fadeInDown}
							className='inline-flex items-center gap-3 px-5 py-2 bg-textSecondary/10 rounded-full'>
							<Award className='w-5 h-5 text-textSecondary' />
							<span className='text-sm font-semibold text-textSecondary uppercase tracking-wider'>
								Core Values
							</span>
						</motion.div>

						<motion.h2
							variants={fadeInUp}
							className='text-5xl md:text-6xl font-bold text-bgPrimary dark:text-textPrimary'>
							The <span className='text-textSecondary'>TENDERHEART</span> Way
						</motion.h2>

						<motion.p
							variants={fadeInUp}
							className='text-xl text-gray-600 dark:text-gray-400'>
							Principles that guide everything we do
						</motion.p>
					</motion.div>

					{/* Values Grid */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{[
							{
								letter: 'T',
								title: 'Truth',
								desc: 'We uphold honesty and integrity',
							},
							{
								letter: 'E',
								title: 'Excellence',
								desc: 'We strive for quality and mastery',
							},
							{
								letter: 'N',
								title: 'Nurture',
								desc: 'We care with patience and love',
							},
							{
								letter: 'D',
								title: 'Discipline',
								desc: 'We build responsibility and self-control',
							},
							{
								letter: 'E',
								title: 'Empathy',
								desc: 'We show compassion and kindness',
							},
							{
								letter: 'R',
								title: 'Reverence',
								desc: 'We honor God in all things',
							},
						].map((value, index) => {
							const isPrimary = index % 2 === 0;

							return (
								<motion.div
									key={index}
									variants={staggerItem}
									className='group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden'>
									{/* subtle overlay */}
									<div
										className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 ${
											isPrimary ? 'bg-bgPrimary' : 'bg-textSecondary'
										}`}
									/>

									<div className='relative z-10 space-y-4'>
										{/* Icon */}
										<div
											className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
												isPrimary ? 'bg-bgPrimary' : 'bg-textSecondary'
											}`}>
											<span
												className={`text-3xl font-bold ${
													isPrimary ? 'text-white' : 'text-bgPrimary'
												}`}>
												{value.letter}
											</span>
										</div>

										<div>
											<h3 className='text-2xl font-bold text-bgPrimary dark:text-textPrimary mb-2'>
												{value.title}
											</h3>
											<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
												{value.desc}
											</p>
										</div>
									</div>

									{/* decorative circle */}
									<div
										className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300 ${
											isPrimary ? 'bg-bgPrimary' : 'bg-textSecondary'
										}`}
									/>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeInUp}
				className='relative py-32 overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
				<div className='absolute inset-0'>
					<div className='absolute top-1/4 right-1/4 w-96 h-96 bg-textSecondary/10 rounded-full blur-3xl animate-pulse'></div>
					<div className='absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-bgPrimary/5 rounded-full blur-3xl animate-pulse'></div>
				</div>

				<div className='relative max-w-5xl mx-auto px-6 text-center space-y-12'>
					<div className='space-y-6'>
						<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-bgPrimary dark:text-textPrimary leading-tight'>
							Join the <span className='text-textSecondary'>Tender Heart</span>{' '}
							Family
						</h2>
						<p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light'>
							Experience education that transforms minds, nurtures hearts, and
							builds character for life
						</p>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<Link
							to='/contact'
							className='group px-10 py-5 bg-linear-to-r from-bgPrimary to-[#0A3836] hover:from-[#0A3836] hover:to-bgPrimary text-textPrimary font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-bgPrimary/30 flex items-center gap-3'>
							<span>Schedule a Visit</span>
							<svg
								className='w-5 h-5 group-hover:translate-x-1 transition-transform'
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
						<Link
							to='/media'
							className='px-10 py-5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-bgPrimary dark:text-textPrimary font-bold rounded-full transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-bgPrimary dark:hover:border-textSecondary shadow-lg'>
							Explore Gallery
						</Link>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default AboutUsPage;
