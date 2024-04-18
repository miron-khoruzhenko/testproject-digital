import serviceDB from './servicesDB'

const ServicesContainer = () => {
	const styles = {
		servicesContainer : 'flex flex-row md:flex-col mt-16 md:mt-0 ',
		servicesBallContainer: 'flex flex-col md:flex-row justify-around items-center px-8 md:mt-20 ',
		serviceDescrContainer : 'grid grid-rows-5  md:flex flex-col md:flex-row justify-between items-center md:pt-5',
		serviceDescr: 'text-center text-white w-[190px] text-base ',
		smallBall: 'h-[5px] w-[5px] bg-zinc-100 rounded-full ',
	}

	const ball_gap = () => {
		const tmpArr = []
		for (let i=0; i<5;i++)
			tmpArr.push(<div key={i + '_small_ball'} className={styles.smallBall}></div>)
		return tmpArr
	}

	return(
		<div className={styles.servicesContainer}>
			<div className={styles.servicesBallContainer}>
			{serviceDB.map((service, index) => {
					if (index === 0)
						return <Service key={service.index + '_service'} service={service} />
					
					return (
						<>
							{ball_gap()}
							<Service key={service.index + '_service'} service={service} />
						</>
			)})}
		</div>

		<div className={styles.serviceDescrContainer}>
			{
				serviceDB.map((service) => {
					return (
							<h4 key={service.index + '_heading'} className={styles.serviceDescr}>{service.title}</h4>
				)})
			}
		</div>
	</div>
	)
}

interface ServiceProps {
	service: {
		icon: string
	}
}

const Service = ({service} : ServiceProps) => {
	const styles = {
		serviceBall: "h-[100px] w-[100px] bg-manBlue500 border-manBlue600 border-[5px] rounded-full grid place-items-center",
	}

	return (
			<div className={styles.serviceBall}>
				<img src={service.icon} alt="icon" />
			</div>
	)
}

export default ServicesContainer