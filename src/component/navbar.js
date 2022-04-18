import './style.css';
import { useEffect } from 'react';
function Navbar(props) {
	useEffect(() => {
		import('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js');
		import('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js');
		const list = document.querySelectorAll('.list');
		function activeLink() {
			list.forEach((item) => item.classList.remove('active'));
			this.classList.add('active');
		}
		list.forEach((item) => item.addEventListener('mouseover', activeLink));
	}, []);
	return (
		<div className="navigation">
			<ul>
				<li className="list active">
					<a href="index.html">
						<span className="icon">
							<ion-icon name="home-outline"></ion-icon>
						</span>
						<span className="text">
							{props.menu[0]}
						</span>
					</a>
				</li>
				<li className="list">
					<a href="index.html">
						<span className="icon">
							<ion-icon name="person-outline"></ion-icon>
						</span>
						<span className="text">
						{props.menu[1]}
						</span>
					</a>
				</li>
				<li className="list">
					<a href="index.html">
						<span className="icon">
							<ion-icon name="book-outline"></ion-icon>
						</span>
						<span className="text">
							{props.menu[2]}
						</span>
					</a>
				</li>
				<li className="list">
					<a href="index.html">
						<span className="icon">
							<ion-icon name="globe-outline"></ion-icon>
						</span>
						<span className="text">
						{props.menu[3]}
						</span>
					</a>
				</li>
				<div className="indicator"></div>
			</ul>
		</div>
	);
}
export default Navbar;