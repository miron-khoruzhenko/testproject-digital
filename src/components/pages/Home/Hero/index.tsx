const Hero = () => {
	const styles = {
		hero: 'w-screen h-screen bg-white bg-hero-bg bg-center bg-no-repeat bg-cover overflow-hidden ',
		heroContent: 'container mx-auto flex flex-col gap-20 justify-center h-full pt-12 md:pt-16 px-2 lg:px-0 2xl:pt-24 ',
		heroTitle: 'font-bold uppercase text-center text-4xl md:text-5xl text-black',
		titleSpan: 'text-manBlue500 ',
		heroTextBlock: '',
		heroListTitle: 'font-bold text-md md:text-lg lg:text-xl mb-2',
		heroList: 'relative pl-4 text-md md:text-lg lg:text-xl',
		heroListItem: 'list-["-"] pl-3 ',
		heroBtnContainer: 'flex justify-center md:justify-start gap-3 lg:gap-7',
		heroButton: 'py-2 px-[60px] rounded border text-sm ',
		btnPrimary: 'bg-manBlue500 text-white border-white ',
		btnSecondary: 'bg-white text-zinc-800 border-zinc-400 '
	
	}

	return (
		<section className='w-screen h-screen bg-white bg-hero-bg bg-center bg-no-repeat bg-cover'>
			<div className={styles.heroContent}>
				<h1 className={styles.heroTitle}>
					<span className={styles.titleSpan}>Lorem ipsum</span> dolor sit <br />
					amet consectetur <span className={styles.titleSpan}>adipiscing</span>
					</h1>

				<div className={styles.heroTextBlock}>
					<h3 className={styles.heroListTitle}>
						At vero eos et accusamus et iusto odio dignissimos ducimus!
					</h3>
				
					<ul className={styles.heroList}>
						<li className={styles.heroListItem}>Totam rem aperiam eaque ipsa</li>
						<li className={styles.heroListItem}>Sit voluptatem accusantium doloremque laudantium</li>
						<li className={styles.heroListItem}>Sed ut perspiciatis, unde omnis iste natus error</li>
					</ul>
				</div>

					<div className={styles.heroBtnContainer}>
						<button className={styles.heroButton + styles.btnPrimary}>Заказать</button>
						<button className={styles.heroButton + styles.btnSecondary}>Подробнее</button>
					</div>
			</div>
		</section>
	)
}

export default Hero