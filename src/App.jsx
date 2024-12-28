import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/navbar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

function App() {
	return (
		<>
			<div className="overflow-hidden text-neutral-300 antialiased selection:bg-gray-300 selection:text-gray-900">
				<div className="fixed top-0 -z-10 h-full w-full">
					<div className="relative h-full w-full bg-slate-950">
						<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
					</div>
				</div>
				<div className="container mx-auto px-8">
					<Navbar />
					<Hero />
					<About />
					<Technologies />
					<Experience />
					<Projects />
					<Contacts />
				</div>
			</div>
		</>
	);
}

export default App;
