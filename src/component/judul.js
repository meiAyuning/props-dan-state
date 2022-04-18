import {useState} from 'react';
function Judul(props) {
	const [angka, setAngka] = useState(1);
	const ubahAngka = () => {
		setAngka(angka + 1);
}
	return (
	<>
		<h1>Selamat Datang {props.nama}</h1>
		<p>Ini komponen menggunakan function</p>
		<h2>Data state awal : {angka}</h2>
		<button onClick={ubahAngka}>Ubah</button>
	</>
	);
}
export default Judul;