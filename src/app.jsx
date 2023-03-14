import { useState } from 'preact/hooks';
import './app.css';
import '@picocss/pico';

import irisCarAvif from './assets/cars/iris.avif';
import irisCarWebp from './assets/cars/iris.webp';
import irisCarPng from './assets/cars/iris.png';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<strong>Brand</strong>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">Link</a>
						</li>
						<li>
							<a href="#">Link</a>
						</li>
						<li>
							<a href="#" role="button">
								Button
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<div className="cars-grid-container">
					<img src={irisCarAvif} class="" alt="Car Iris" />
					<img src={irisCarWebp} class="" alt="Car Iris" />
					<img src={irisCarPng} class="" alt="Car Iris" />
				</div>
			</main>

			<footer>
				<p>
					<a href="#">Link</a> | <a href="#">Link</a> | <a href="#">Link</a>
				</p>
			</footer>
		</>
	);
}
