import icon from '/src/assets/icons/icon5.svg'
import { useState } from 'react'

const ControlSection = () => {
	const [percent, setPercent] = useState('50')

	const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPercent(e.target.value)
	}

	const styles = {
		controlSection : "px-3 md:px-0 flex flex-col gap-14 mt-20 pb-16 md:pb-[150px]  ",
		inputContainer :"grid gap-[30px] grid-cols-1 md:grid-cols-3 overflow-visible ",
		input : 'px-3 py-2 bg-zinc-200 w-full rounded text-zinc-800 placeholder-zinc-800 cursor-pointer ',

		sliderLabel: "md:col-span-2 w-full block",
		sliderText: 'flex justify-between text-white text-lg ',

		attachBtn : "bg-white w-full px-3 py-2 rounded flex items-center justify-center gap-2 cursor-pointer",

		submitBtn: ' mx-auto py-2 px-[60px] rounded border text-base font-semibold bg-manBlue500 text-white border-white ',
	}


	const selectDB = ['Sed ut perspiciatis', 'Nemo enim ipsam', 'Et harum quidem', 'Temporibus autem', 'Itaque earum rerum']
	
	return(
		<form className={styles.controlSection}>
		<div className={styles.inputContainer}>
			<select name="" id="" defaultValue={'Выберите тип системы'} className={styles.input}>
				<option value="Выберите тип системы" disabled>Выберите тип системы</option>
				{selectDB.map((item, index) => {
					return <option key={index + '_select'} value={item}>{item}</option>
					})
				}
			</select>

			<input className={styles.input} placeholder='Ваш e-mail' type="email" name="" id="" />
			
			<input className={styles.input} placeholder='Ваше имя' type="text" />

			<label htmlFor="" className={styles.sliderLabel}>
				<div className={styles.sliderText}>
					<p className="">Sed ut perspiciatis, unde omnis iste natus</p>
					<p className="">{percent}%</p>
				</div>
				<input type="range" min={1} max={100} onChange={handleChange} className="my_slider" />
			</label>

			<div className={styles.attachBtn}> 
				<img src={icon} alt="" className='w-[20px]' />Прикрепить файл
			</div>
			
		</div>

		<button className={styles.submitBtn}>Отправить</button>

	</form>
	)
}

export default ControlSection;