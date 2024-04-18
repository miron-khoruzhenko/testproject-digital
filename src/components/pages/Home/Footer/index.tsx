

import { fakeDB, fakeDB2 } from './fakeDBs'

const Footer = () => {
	const styles = {
		footer : 'w-full bg-manBlue700 h-[80px] text-zinc-300 text-xs ',
		container : 'container mx-auto grid grid-cols-3 items-center h-full ',
		
		socialLinks : 'flex items-center justify-center gap-10 relative ',
		pseudoRight : 'after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-px after:bg-zinc-300 ',
		pseudoLeft : 'before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4 before:w-px before:bg-zinc-300 ',
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