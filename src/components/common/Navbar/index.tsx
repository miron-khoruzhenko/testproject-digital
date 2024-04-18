import { Link } from 'react-router-dom'

import SidebarScreen from './Sidebar/SidebarScreen'
import NavbarLinks from './NavbarLinks/NavbarLinks'

const Navbar = () => {
	const styles = {
		nav: 'bg-manBlue900/90 absolute top-0 left-0 w-full ',
		navContainer: 'container mx-auto flex justify-between items-center h-12 md:h-16 px-2 2xl:h-24 w-full ',
		logo: 'uppercase text-white font-extrabold text-lg 2xl:text-2xl cursor-pointer ',
		logoSpan: 'text-manBlue500 ',
		navList: 'flex gap-14 ',
		navListItem: 'uppercase  text-sm font-semibold hover:text-manBlue500 transition-colors duration-300 ease-in-out cursor-pointer '
	}

	const linkStyles = {
		links : "uppercase relative text-white text-sm font-semibold hover:text-manBlue500 transition-colors duration-300 ease-in-out cursor-pointer   ",
		linksAfter : `after:block after:h-[2px] after:-bottom-2 after:w-full after:my-1 after:transition-opacity after:absolute after:opacity-0 after:bg-manBlue500 hover:after:opacity-100 `,
		activeLink : '!text-manBlue500 '
	}



	return (
		<nav className={styles.nav}>
			<div className={styles.navContainer}>
				
				<div className={styles.logo}>
					<Link to={'/'}>
						LOREMIPSUM.<span className={styles.logoSpan}>NET</span>
					</Link>
				</div>


				<NavbarLinks mode={'horizontal'} linkStyles={linkStyles}/>

				<SidebarScreen />

			</div>
		</nav>
	)
}

export default Navbar