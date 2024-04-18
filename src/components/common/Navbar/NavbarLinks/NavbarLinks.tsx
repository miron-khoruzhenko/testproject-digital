import { links } from './links.ts'
import { Link, useLocation } from 'react-router-dom'

type LinkStyles = {
  links: string;
  linksAfter: string;
  activeLink: string;
};

type NavbarLinksProps = {
	mode: string,
	className?: string,
	linkStyles: LinkStyles,
}	

const NavbarLinks : React.FC<NavbarLinksProps> = (props) => {
	const {mode, linkStyles} = props
	const location = useLocation()

	const styles = {
		ul: `${mode === 'vertical' ? 
			'flex flex-col space-y-6 text-2xl ' : 
			mode === 'horizontal' ? 
				"flex space-x-4 max-sm:hidden " : 
				'' }`,
	}

	return (
		<ul className={styles.ul + props.className}>

		{links["to"].map((item) => {
			return (
				<li className="" key={item.id}>
					<Link 
						to={item.path} 
						className={linkStyles.links + linkStyles.linksAfter + (item.path === location.pathname ? linkStyles.activeLink : '')}>
							{item.title}
					</Link>
				</li>)
		})}
	</ul>
	)
}


export default NavbarLinks