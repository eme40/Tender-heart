import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
	Mail,
	MapPin,
	Phone,
	Send,
	Clock,
	MessageCircle,
	ArrowRight,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// Mock image for demo
const image = 'data:image/svg+xml,%3Csvg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="1200" height="800" fill="%230E4C4A"/%3E%3C/svg%3E';

const contact = [
	{
		id: 1,
		title: 'Phone Number',
		icon: <Phone className='w-6 h-6' />,
		value: '+234 080 3453 9407',
		color: 'from-[#0E4C4A] to-[#0a3a38]', // bgPrimary
	},
	{
		id: 2,
		title: 'Email',
		icon: <Mail className='w-6 h-6' />,
		value: 'tenderheartschooledu@gmail.com',
		color: 'from-[#F4B824] to-[#d9a520]', // textSecondary
	},
	{
		id: 3,
		title: 'Location',
		icon: <MapPin className='w-6 h-6' />,
		value: '26 Mike Torey Avenue, Phase 6 Trans Ekulu',
		color: 'from-[#0E4C4A] to-[#0a3a38]', // bgPrimary
	},
];

const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.send(
				VITE_EMAILJS_SERVICE_ID,
				VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.name,
					from_email: formData.email,
					phone: formData.phone,
					message: formData.message,
				},
				VITE_EMAILJS_PUBLIC_KEY
			);

			toast.success("Message sent successfully! We'll get back to you soon.", {
				position: 'top-right',
				autoClose: 5000,
			});

			setFormData({ name: '', email: '', phone: '', message: '' });
		} catch (error) {
			console.error('EmailJS Error:', error);

			toast.error('Failed to send message. Please try again or contact us directly.', {
				position: 'top-right',
				autoClose: 5000,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// Animation Variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: { 
				duration: 0.8, 
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const scaleIn = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { 
			opacity: 1, 
			scale: 1,
			transition: { 
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1
			}
		}
	};

	const cardVariant = {
		hidden: { 
			opacity: 0, 
			y: 50,
			scale: 0.9
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: { 
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1]
			}
		}
	};

	return (
		<div className='font-sans bg-white dark:bg-gray-950 overflow-hidden'>
			{/* Hero Section */}
			<section className='relative h-[70vh] flex items-center justify-center overflow-hidden'>
				<motion.div
					initial={{ scale: 1.2 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{ backgroundImage: `url(${image})` }}>
					<div className='absolute inset-0 bg-bgPrimary dark:bg-gray-900'></div>
				</motion.div>

				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

				<div className='relative z-10 text-center space-y-6 px-6 max-w-4xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className='inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4'>
						<MessageCircle className='w-4 h-4 text-textSecondary' />
						<span className='text-sm font-medium text-white'>
							We'd Love to Hear From You
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 40 }}	
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
						className='text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight'>
						Get In <span className='text-textSecondary'>Touch</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
						className='text-xl md:text-2xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto font-light'>
						Have questions about enrollment, programs, or visiting our campus?
						Let's start a conversation.
					</motion.p>
				</div>
			</section>

			{/* Contact Cards */}
			<section className='relative -mt-24 z-20 pb-20'>
				<div className='max-w-7xl mx-auto px-6'>
					<motion.div
						variants={staggerContainer}
						viewport={{ once: true, margin: '-100px' }}
						initial='hidden'
						whileInView='visible'
						className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{contact.map((item) => (
							<motion.div
								key={item.id}
								variants={cardVariant}
								whileHover={{ 
									y: -12, 
									scale: 1.02,
									transition: { duration: 0.3 }
								}}
								className='group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer'>
								
								<motion.div 
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 0.05 }}
									transition={{ duration: 0.3 }}
									className={`absolute inset-0 bg-linear-to-br ${item.color}`}
								/>
								
								<motion.div 
									whileHover={{ scale: 1.1, rotate: 5 }}
									transition={{ duration: 0.3 }}
									className={`relative w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
									<div className='text-white'>{item.icon}</div>
								</motion.div>

								<div className='relative space-y-2'>
									<h3 className='text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
										{item.title}
									</h3>
									<p className='text-md font-bold text-bgPrimary dark:text-white wrap-break-word'>
										{item.value}
									</p>
								</div>

								{/* Decorative corner */}
								<motion.div
									initial={{ scale: 0 }}
									whileHover={{ scale: 1 }}
									transition={{ duration: 0.3 }}
									className={`absolute -bottom-2 -right-2 w-24 h-24 bg-linear-to-br ${item.color} rounded-full opacity-10`}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Form Section */}
			<section className='py-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16'>
						
						{/* Left Side - Info */}
						<motion.div 
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={staggerContainer}
							className='lg:col-span-2 space-y-8'
						>
							<motion.div variants={fadeInUp} className='space-y-4'>
								<h2 className='text-4xl md:text-5xl font-bold text-bgPrimary dark:text-white'>
									Let's Connect
								</h2>
								<div className='w-20 h-1.5 bg-linear-to-r from-textSecondary to-yellow-300 rounded-full' />
								<p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
									At Tender Heart, communication matters. Whether you're
									interested in enrollment, visiting our campus, or learning
									more about our programs, we're here to help.
								</p>
							</motion.div>

							<div className='space-y-4'>
								<motion.div
									variants={fadeInUp}
									whileHover={{ x: 10 }}
									className='flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300'>
									<motion.div
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.6 }}
										className='w-12 h-12 bg-bgPrimary/10 dark:bg-textSecondary/10 rounded-xl flex items-center justify-center shrink-0'>
										<Clock className='w-6 h-6 text-bgPrimary dark:text-textSecondary' />
									</motion.div>
									<div>
										<h4 className='font-semibold text-bgPrimary dark:text-white mb-1'>
											Office Hours
										</h4>
										<p className='text-sm text-gray-600 dark:text-gray-400'>
											Monday - Friday: 8:00 AM - 4:00 PM
										</p>
									</div>
								</motion.div>

								<motion.div
									variants={fadeInUp}
									whileHover={{ x: 10 }}
									className='flex items-start gap-4 p-5 bg-linear-to-br from-textSecondary/10 to-yellow-100/50 dark:from-textSecondary/5 dark:to-yellow-900/20 rounded-2xl border border-textSecondary/20 hover:shadow-lg transition-shadow duration-300'>
									<motion.div
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.6 }}
										className='w-12 h-12 bg-textSecondary/20 rounded-xl flex items-center justify-center shrink-0'>
										<MessageCircle className='w-6 h-6 text-textSecondary' />
									</motion.div>
									<div>
										<h4 className='font-semibold text-bgPrimary dark:text-white mb-1'>
											Quick Response
										</h4>
										<p className='text-sm text-gray-600 dark:text-gray-400'>
											We typically respond within 24 hours during business days
										</p>
									</div>
								</motion.div>
							</div>
						</motion.div>

						{/* Right Side - Form */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut', }}
							className='lg:col-span-3'>
							<form
								onSubmit={handleSubmit}
								className='bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800 space-y-6'>
								
								<div className='space-y-2'>
									<label className='block text-sm font-semibold text-gray-700 dark:text-gray-300'>
										Full Name *
									</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										disabled={isSubmitting}
										placeholder='John Doe'
										className='w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-bgPrimary dark:focus:ring-textSecondary focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
									/>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div className='space-y-2'>
										<label className='block text-sm font-semibold text-gray-700 dark:text-gray-300'>
											Email Address *
										</label>
										<input
											type='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											required
											disabled={isSubmitting}
											placeholder='johndoe@example.com'
											className='w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-bgPrimary dark:focus:ring-textSecondary focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
										/>
									</div>

									<div className='space-y-2'>
										<label className='block text-sm font-semibold text-gray-700 dark:text-gray-300'>
											Phone Number
										</label>
										<input
											type='tel'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											disabled={isSubmitting}
											placeholder='+234 xxx xxxx xxx'
											className='w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-bgPrimary dark:focus:ring-textSecondary focus:border-transparent transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
										/>
									</div>
								</div>

								<div className='space-y-2'>
									<label className='block text-sm font-semibold text-gray-700 dark:text-gray-300'>
										Your Message *
									</label>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleChange}
										required
										disabled={isSubmitting}
										rows='6'
										placeholder='Tell us how we can help you...'
										className='w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-bg dark:focus:ring-textSecondary focus:border-transparent transition-all resize-none text-gray-900 dark:text-gray-100 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
									/>
								</div>

								<button 
									type='submit'
									disabled={isSubmitting}
									className='group w-full md:w-auto px-8 py-4 bg-linear-to-r from-bgPrimary to-bgPrimary dark:from-textSecondary dark:to-yellow-400 text-white dark:text-bgPrimary font-bold rounded-2xl hover:shadow-2xl hover:shadow-bgPrimary/30 dark:hover:shadow-textSecondary/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer'>
									<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
									{!isSubmitting && (
										<Send className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
									)}
									{isSubmitting && (
										<svg
											className='animate-spin h-5 w-5'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
										</svg>
									)}
								</button>
							</form>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className='py-20 bg-white dark:bg-gray-950'>
				<div className='max-w-7xl mx-auto px-6'>
					<motion.div 
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={staggerContainer}
						className='space-y-8'
					>
						<motion.div variants={fadeInUp} className='text-center space-y-4'>
							<h2 className='text-3xl md:text-4xl font-bold text-bgPrimary dark:text-white'>
								Visit Our Campus
							</h2>
							<p className='text-lg text-gray-600 dark:text-gray-400'>
								26 Mike Torey Avenue, Phase 6 Trans Ekulu, Enugu
							</p>
						</motion.div>

						<motion.div 
							variants={scaleIn}
							className='relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-800 h-[500px]'
						>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4021.1405542731172!2d7.485528075030137!3d6.47608532371246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a38243f526e5%3A0xc7a871cdb359beb1!2sTender%20Heart%20International%20School!5e1!3m2!1sen!2sng!4v1763204031604!5m2!1sen!2sng'
								className='w-full h-full'
								style={{ border: 0 }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='Tender Heart School Location'>
							</iframe>

							<motion.a
								whileHover={{ scale: 1.05, y: -5 }}
								whileTap={{ scale: 0.95 }}
								href='https://maps.google.com/?q=26+Mike+Torey+Avenue+Trans+Ekulu+Enugu'
								target='_blank'
								rel='noopener noreferrer'
								className='absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white dark:bg-gray-900 text-bgPrimary dark:text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2'>
								<MapPin className='w-5 h-5' />
								<span>Get Directions</span>
								<motion.div
									animate={{ x: [0, 5, 0] }}
									transition={{ duration: 1.5, repeat: Infinity }}
								>
									<ArrowRight className='w-4 h-4' />
								</motion.div>
							</motion.a>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;