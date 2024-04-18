import React from 'react'
import Hero from './Hero'
import Navbar from '../../common/Navbar'
import Order from './OrderSection'

const Home = () => {
	return (
		<div className='relative '>
			<Navbar />
			<Hero />
			<Order />
		</div>
	)
}

export default Home