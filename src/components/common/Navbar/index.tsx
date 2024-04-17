import React from 'react'

const Navbar = () => {
	return (
		<nav className='bg-darkBlue/90 absolute top-0 left-0 w-full  ' >
			<div className="container mx-auto flex justify-between items-center h-24 w-full ">
				<div className="logo uppercase text-white font-extrabold text-2xl">LOREMIPSUM.<span className="text-lightBlue">NET</span></div>
			</div>
			
		</nav>
	)
}

export default Navbar