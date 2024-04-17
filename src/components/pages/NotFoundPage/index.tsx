import { Link } from "react-router-dom"

const NotFoundPage = () => {
	return (
		<section className="w-screen h-screen bg-zinc-100 font-['Lato'] flex flex-col items-center justify-center">
			<h1 className="text-center  my-4">
				<span className="font-bold text-8xl">404</span><br />
				<span className="text-3xl">Page Not Found</span>
			</h1>
			<Link to={'/'} className="bg-black text-white rounded-md px-8 py-2 my-5" >Back to Homepage</Link>
		</section>
	)
}

export default NotFoundPage