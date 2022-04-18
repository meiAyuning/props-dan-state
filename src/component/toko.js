import { useState } from "react";
function Toko(props) {
  const [angka, setAngka] = useState(1);
  const [harga, setHarga] = useState(125000);
  const plusAngka = () => {
    setAngka(angka + 1);
  };
  const minAngka = () => {
    if (angka > 1) {
      setAngka(angka - 1);
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.name} OlShop</h1>
      <div className="container">
        <div className="produk">
          <img src="koko.webp" alt="" />
          <h2>Baju Koko</h2>
          <h2>Rp. {harga}</h2>
        </div>
        <div className="price">
          <div className="jmlh">
            <h3>Jumlah Beli</h3>
            <button onClick={minAngka}>-</button>
            <input type="text" value={angka} className="input" readOnly />
            <button onClick={plusAngka}>+</button>
          </div>
          <div className="harga">
            <h3> Total Harga</h3>
            <span>Rp. {angka * harga}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toko;
