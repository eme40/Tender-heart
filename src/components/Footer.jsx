import logo from '../assets/logo.png';
import {
	Phone,
	Mail,
	MapPin,
	MessageCircleMore,
	Facebook,
	Instagram,
} from 'lucide-react';
import { Link, Links, NavLink } from 'react-router-dom';

const contact = [
	{
		id: 1,
		title: 'Phone Number',
		icon: <Phone className='w-4 h-4' />,
		value: '+234 080 3453 9407',
		href: 'tel:+2348034539407',
	},
	{
		id: 2,
		title: 'Email',
		icon: <Mail className='w-4 h-4' />,
		value: 'tenderheartschooledu@gmail.com',
		href: 'mailto:tenderheartschooledu@gmail.com',
	},
	{
		id: 3,
		title: 'Address',
		icon: <MapPin className='w-4 h-4' />,
		value: '26 Mike Torey Avenue, Phase 6 Trans Ekulu, Enugu',
		href: 'https://maps.google.com/?q=26+Mike+Torey+Avenue+Trans+Ekulu+Enugu',
	},
];

const navlinks = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'About Us', path: '/about' },
	{ id: 3, name: 'Gallery', path: '/gallery' },
	{ id: 4, name: 'Contact', path: '/contact' },
];

const socialMedia = [
	{
		id: 1,
		icon: <MessageCircleMore className='w-5 h-5' />,
		link: 'https://wa.me/2348034539407',
		label: 'WhatsApp',
	},
	{
		id: 2,
		icon: <Facebook className='w-5 h-5' />,
		link: 'https://facebook.com/tenderheart',
		label: 'Facebook',
	},
	{
		id: 3,
		icon: <Instagram className='w-5 h-5' />,
		link: 'https://instagram.com/tenderheart',
		label: 'Instagram',
	},
];

const Footer = () => {
	return (
		<footer className='bg-bgPrimary dark:bg-gray-900 text-textPrimary'>
			<div className='max-w-7xl mx-auto px-6 py-12 lg:py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
					{/* Logo Section */}
					<div className='space-y-6'>
						<Link to='/' className='flex items-center gap-3 w-fit group'>
							<img
								className='w-12 h-12'
								src={logo}
								alt='Tender Heart School Logo'
							/>
							<h4 className='text-2xl font-bold text-textPrimary'>
								Tender <span className='text-textSecondary'>Heart</span>
							</h4>
						</Link>

						<div className='space-y-3'>
							<h5 className='text-lg font-semibold text-textSecondary uppercase tracking-wide'>
								Corporate Philosophy
							</h5>
							<p className='text-gray-300 dark:text-gray-400 text-sm leading-relaxed'>
								We believe that true education builds both knowledge and
								character. We create an environment where excellence,
								discipline, creativity, and moral values thrive together.
							</p>
						</div>

						{/* Social Media */}
						<div className='flex items-center gap-3 pt-2'>
							{socialMedia.map((item) => (
								<a
									key={item.id}
									href={item.link}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={item.label}
									className='w-10 h-10 rounded-full bg-textPrimary/10 hover:bg-textSecondary dark:bg-textPrimary/5 dark:hover:bg-textSecondary flex items-center justify-center transition-all duration-300 hover:scale-110 text-textPrimary hover:text-bgPrimary dark:hover:text-bgPrimary'>
									{item.icon}
								</a>
							))}
						</div>
					</div>

					{/* Get in Touch */}
					<div className='space-y-4'>
						<h5 className='text-lg font-semibold text-textPrimary uppercase tracking-wide'>
							Get in Touch
						</h5>
						<ul className='space-y-4'>
							{contact.map((item) => (
								<li key={item.id}>
									<a
										href={item.href}
										target={item.id === 3 ? '_blank' : undefined}
										rel={item.id === 3 ? 'noopener noreferrer' : undefined}
										className='flex items-start gap-3 group hover:text-textSecondary transition-colors duration-200'>
										<div className='w-10 h-10 rounded-full bg-textPrimary/10 dark:bg-textPrimary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-textSecondary transition-colors duration-200 text-textPrimary group-hover:text-bgPrimary dark:group-hover:text-bgPrimary'>
											{item.icon}
										</div>
										<div className='flex-1 min-w-0'>
											<h6 className='font-medium text-sm mb-1 text-textPrimary'>
												{item.title}
											</h6>
											<p className='text-xs text-gray-300 dark:text-gray-400 leading-relaxed break-words'>
												{item.value}
											</p>
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Useful Links */}
					<div className='space-y-4'>
						<h5 className='text-lg font-semibold text-textPrimary uppercase tracking-wide'>
							Useful Links
						</h5>
						<ul className='space-y-3'>
							{navlinks.map((link) => (
								<li key={link.id}>
									<NavLink
										to={link.path}
										className={({ isActive }) =>
											`relative inline-block text-gray-300 dark:text-gray-400 hover:text-textSecondary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-textSecondary after:transition-all after:duration-200 hover:after:w-full ${
												isActive
													? 'after:w-full text-textSecondary font-medium'
													: 'after:w-0'
											}`
										}>
										{link.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Copyright Bar */}
				<div className='border-t border-textPrimary/10 mt-12 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 dark:text-gray-500'>
						<p>
							© {new Date().getFullYear()} Tender Heart School. All rights
							reserved.
						</p>
						<p className='text-center md:text-right'>
							Designed by <span className='text-textSecondary'>Vertez</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
