import { fakeDB, fakeDB2 } from './fakeDBs'

const Footer = () => {
	const styles = {
		footer : 'w-full bg-manBlue700 h-auto py-4 lg:py-0 lg:h-[80px] text-zinc-300 text-xs text-center lg:text-left ',
		container : 'container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 items-center h-full ',
		
		socialLinks : 'flex items-center justify-center gap-10 relative ',
		pseudoRight : 'lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-4 lg:after:w-px lg:after:bg-zinc-300 ',
		pseudoLeft : 'lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-4 lg:before:w-px lg:before:bg-zinc-300 ',
		socialItem : 'flex items-center justify-center gap-2 ',

		
	}



	return (
		<div className={styles.footer}>
			<div className={styles.container}>
			<div className="text-sm text-white">© 2018 «LoremIpsum.net» Все права защищены.</div>
			<div className={styles.socialLinks + styles.pseudoLeft + styles.pseudoRight + 'px-10 '}>
				{fakeDB.map((item) => (
					<div key={item.index} className={styles.socialItem}>
						<img src={item.icon} alt={item.title} />
						<p>{item.title}</p>
					</div>
				))}
			</div>
			<div className={styles.socialLinks}>
				{fakeDB2.map((item) => (
					<div key={item.index} className={styles.socialItem}>
						<img src={item.icon} alt={item.title} />
						<p>{item.title}</p>
						</div>
				))}
			</div>
			</div>
		</div>
	)
}

export default Footer