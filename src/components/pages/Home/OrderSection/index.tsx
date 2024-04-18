import ServicesContainer from './ServicesContainer'




const Order = () => {
	const styles = {
		orderSection: 'w-screen bg-order-bg min-h-screen bg-center bg-no-repeat bg-cover bg-manBlue800 ',
		contentContainer: "container mx-auto flex flex-col pt-20 ",
		content: "flex flex-col items-center justify-center",

		titleContainer: "text-center",
		title: "text-4xl text-white font-bold uppercase ",
		titleSpan: "text-manBlue500 ",
		titleSubheading: "text-zinc-200 text-lg mt-2 ",

	}

	return (
		<section className={styles.orderSection}>
			<div className={styles.contentContainer}>
				
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>Оформление <span className={styles.titleSpan}>Заказа</span></h2>
					<p className={styles.titleSubheading}>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
				</div>

				<ServicesContainer />

			</div>
		</section>
	)
}

export default Order