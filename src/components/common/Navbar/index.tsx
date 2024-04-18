import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const styles = {
		nav: 'bg-manBlue900/90 absolute top-0 left-0 w-full ',
		navContainer: 'container mx-auto flex justify-between items-center h-24 w-full ',
		logo: 'uppercase text-white font-extrabold text-2xl cursor-pointer ',
		logoSpan: 'text-manBlue500 ',
		navList: 'flex gap-14 ',
		navListItem: 'uppercase  text-sm font-semibold hover:text-manBlue500 transition-colors duration-300 ease-in-out cursor-pointer '
	}

	const links = [
		{
			id: 1,
			title: 'Бизнес',
			path: '/business',
			isActive: true
		},
		{
			id: 2,
			title: 'О Нас',
			path: '/about',
			isActive: false
		},
		{
			id: 3,
			title: 'Цены',
			path: '/prices',
			isActive: false			
		},
		{
			id: 4,
			title: 'Оформить Заказ',
			path: '/order',
			isActive: false			
		}
	]


	return (
		<nav className={styles.nav}>
			<div className={styles.navContainer}>
				
				<div className={styles.logo}>
					<Link to={'/'}>
						LOREMIPSUM.<span className={styles.logoSpan}>NET</span>
					</Link>
				</div>

				<ul className={styles.navList}>
					{links.map(link => (
						
						<li 
							key={link.id} 
							className={styles.navListItem + (link.isActive ? 'text-manBlue500 ' : 'text-white ') }
						>
							<Link to={link.path}>{link.title}</Link>
						</li>
					))}
				</ul>

			</div>
		</nav>
	)
}

export default Navbar