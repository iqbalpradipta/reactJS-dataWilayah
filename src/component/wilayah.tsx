import { useState } from "react";
import axios from "axios";

function Wilayah() {
  const [provinsiData, setDataProvinsi] = useState<any[]>([]);
  const [provinsi, setProvinsi] = useState<string>("");
  const [kabupatenData, setDataKabupaten] = useState<any[]>([]);
  const [kabupaten, setKabupaten] = useState<string>("");
  const [kecamatanData, setDataKecamatan] = useState<any[]>([]);
  const [kecamatan, setKecamatan] = useState<string>("");
  const [kelurahanData, setDataKelurahan] = useState<any[]>([]);
  const [kelurahan, setKelurahan] = useState<string>("");

  const Prov = `https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`;
  const Kab = `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsi}.json`;
  const Kec = `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kabupaten}.json`;
  const Kel = `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatan}.json`;

  axios
    .get(Prov)
    .then((res) => {
      setDataProvinsi(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  if (provinsi) {
    axios
      .get(Kab)
      .then((res) => {
        setDataKabupaten(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (kabupaten) {
    axios
      .get(Kec)
      .then((res) => {
        setDataKecamatan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (kecamatan) {
    axios
      .get(Kel)
      .then((res) => {
        setDataKelurahan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container py-4 px-3 mx-auto">
      <h1>DATA WILAYAH INDONESIA COYY 🔥</h1>
      <p className="mt-3">Provinsi</p>
      <select className="form-select" value={provinsi} onChange={(e) => setProvinsi(e.target.value)}>
        <option value="" disabled selected>
          Pilih Provinsi
        </option>
        {provinsiData.map((data, index) => (
          <option key={index} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>

      <p className="mt-3">Kab/Kota</p>
      <select className="form-select" value={kabupaten} onChange={(e) => setKabupaten(e.target.value)}>
        <option value="" selected>
          Pilih Kab/Kota
        </option>
        {kabupatenData.map((data, index) => (
          <option key={index} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>

      <p className="mt-3">Kecamatan</p>
      <select className="form-select" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)}>
        <option value="" selected>
          Pilih Kecamatan
        </option>
        {kecamatanData.map((data, index) => (
          <option key={index} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>

      <p className="mt-3">Kelurahan</p>
      <select className="form-select" value={kelurahan} onChange={(e) => setKelurahan(e.target.value)}>
        <option value="" selected>
          Pilih Kelurahan
        </option>
        {kelurahanData.map((data, index) => (
          <option key={index} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Wilayah;
