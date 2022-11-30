import Socials from "./Socials"

export default function Testify() {
	const socialLink = {
		facebook: 'smith.graphx',
		email: 'free.t.1896@gmail.com',
		twitter: 'Freetsmith9',
		linkedin: 'akpan96nsikak'
	}

	return (
		<div id="testify" data-aos="fade-up" className="portfolio-section flex flex-col md:flex-row relative mt-8">
			<div className="w-full md:w-3/5 lg:w-4/5 p-4 md:p-8">
				<h1 className="text-4xl text-black mb-4">Testify</h1>
				<div className="text-black">
					Ever done a project with Aston Gemmy?
					<br />
					Did he work on your project at any time?
					<br />
					Tell him about your experience.
				</div>

				<div className="relative my-8">
					<form method="POST">
						<div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2 gap-8">
							<div className="relative flex justify-between bg-gray-200 border-2 rounded-lg">
								<span className="absolute top-0 left-0 flex justify-center items-center w-12 h-full bg-gray-200">
									<i className="fa fa-user-alt"></i>
								</span>
								<input type="text" placeholder="name" className="outline-none w-full py-2 pl-14 pr-2 rounded-lg" />
							</div>
							<div className="relative flex justify-between bg-gray-200 border-2 rounded-lg">
								<span className="absolute top-0 left-0 flex justify-center items-center w-12 h-full bg-gray-200">
									<i className="fa fa-envelope"></i>
								</span>
								<input type="email" className="outline-none w-full py-2 pl-14 pr-2 rounded-lg" placeholder="email" />
							</div>
							<div className="relative flex justify-between bg-gray-200 border-2 rounded-lg">
								<span className="absolute top-0 left-0 flex justify-center items-center w-12 h-full bg-gray-200">
									<i className="fa fa-map-marker-alt"></i>
								</span>
								<input type="text" className="outline-none w-full py-2 pl-14 pr-2 rounded-lg" placeholder="location" />
							</div>
						</div>
						<textarea className="relative block w-full md:w-2/4 my-8 border-4 rounded-lg p-4 outline-none" placeholder="Write your testimony"></textarea>
						<button type="submit" className="hover:bg-blue-600 shadow rounded-tl-lg inline-block rounded-tr-lg rounded-bl-xl rounded-br-3xl my-4 px-8 py-2 text-white bg-blue-400 transition-all duration-700">
							Testify
						</button>
					</form>
				</div>
			</div>

			<div className="w-full md:w-2/5 lg:w-1/5 p-4 text-center">
				<h2 className="inline-block bg-black py-2 px-4 text-white">Product Developer</h2>
				<div className="relative py-4">
					<img data-aos="zoom-in-left" src="images/advertisement/services/nsikak-akpan-gravatar.jpg" alt="Nsikak Akpan" className="border-b-4 border-gray-200 p-2 rounded-full w-24 h-24 mx-auto" width="100%" />

					<div className="text-xl mt-2"> Nsikak Akpan </div>
					<div className="text-center mt-3">
						Graphics Designer ||  UI / UX || Adobe Illustrator (Ai) || Hardware Programmer || C# Developer || Photoshop
						<br />
						From Ideas to reality; Create, Design and Brand products and services with the professionals
					</div>
					<Socials socialMedia={socialLink} />
				</div>
			</div>
		</div>
	)
}