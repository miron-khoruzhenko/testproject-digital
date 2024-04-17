import React from 'react'

const Hero = () => {
	const styles = {
		hero: 'w-screen h-screen bg-white bg-hero-bg bg-center bg-no-repeat bg-cover',
		heroContent: 'container mx-auto flex flex-col justify-center h-full',
		heroTitle: 'font-bold uppercase text-5xl text-black',
		titleSpan: 'text-customBlue ',
		heroTextBlock: '',
		heroListTitle: '',
		heroList: '',
		heroListItem: '',
		heroBtnContainer: 'flex gap-7',
		heroButton: '',
	
	}

	return (
		<div className='w-screen h-screen bg-white bg-hero-bg bg-center bg-no-repeat bg-cover'>
			<div className={styles.heroContent}>
				<h1 className={styles.heroTitle}>
					<span className={styles.titleSpan}>Lorem ipsum</span> dolor sit <br />
					amet consectetur <span className={styles.titleSpan}>adipiscing</span></h1>

				<div className={styles.heroTextBlock}>
					<h3 className={styles.heroListTitle}>
						At vero eos et accusamus et iusto odio dignissimos ducimus!
					</h3>
				
					<ul className={styles.heroList}>
						<li className={styles.heroListItem}>Totam rem aperiam eaque ipsa</li>
						<li className={styles.heroListItem}>Sit voluptatem accusantium doloremque laudantium</li>
						<li className={styles.heroListItem}>Sed ut perspiciatis, unde omnis iste natus error</li>
					</ul>

					<div className={styles.heroBtnContainer}>
						<button className={styles.heroButton}>Заказать</button>
						<button className={styles.heroButton}>Подробнее</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero