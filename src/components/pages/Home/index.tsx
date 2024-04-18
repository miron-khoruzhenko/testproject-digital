import Hero from './Hero'
import Navbar from '../../common/Navbar'
import Order from './OrderSection'
import Footer from './Footer'

const Home = () => {
	return (
		<div className='relative '>
			<Navbar />
			<Hero />
			<Order />
			<Footer />
		</div>
	)
}

export default Home