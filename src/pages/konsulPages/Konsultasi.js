import React, { useState, } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2';


function Konsultasi() {
  const [nama, setNama] = useState("");
  const [nomor_wa, setNomor_wa] = useState("");
  const [email, setEmail] = useState("");
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [tanggal_lahir, setTanggal_lahir] = useState("");

  const UserId = localStorage.getItem("id");
  const cookies = new Cookies();
  const uuid = uuidv4();

  const alert = () => Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'anda belum login!',
    
  })
  const alertSucces =() =>Swal.fire({
    
    icon: 'success',
    title: 'Berhasil Daftar Event',
    showConfirmButton: false,
    timer: 1500
  })
  const data = {
    nama: nama,
    nomor_wa: nomor_wa,
    email: email,
    jenis_kelamin: jenis_kelamin,
    tanggal_lahir: tanggal_lahir,
    isComplete: false,
    uuid: uuid,
    UserId: UserId,
  };

  const handleName = (e) => {
    e.preventDefault();
    const result = e.target.value;
    setNama(result);
    console.log(result);
  };
  const handleNoWa = (e) => {
    const result = e.target.value;
    setNomor_wa(result);
    console.log(nomor_wa);
  };
  const handleEmail = (e) => {
    const result = e.target.value;
    setEmail(result);
    console.log(email);
  };
  const handleJenisKelamin = (e) => {
    const result = e.target.value;
    setJenis_kelamin(result);
    console.log(result);
  };

  const handleTanggalLahir = (e) => {
    const result = e.target.value;
    setTanggal_lahir(result);
    console.log(tanggal_lahir);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cookies.get("token2") === undefined) {
      alert();
    } else {
      alertSucces()
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/konsuls`, data, {
          headers: {
            accessToken: cookies.get("token2"),
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };
  console.log(data);
  return (
    <div className=" bg-[#F4F8FE] w-full h-screen justify-center flex items-center">
      <div className=" sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Gunakan Nomor Hp Aktif untuk Menerima Konfirmasi Lanjutan
              </p>
              <p className="mt-1 text-lg text-gray-600">
                Register Akun NeoPeople Untuk Mengikuti Konseling
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        onChange={handleName}
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nomor Whatsapp
                      </label>
                      <input
                        type="text"
                        onChange={handleNoWa}
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        onChange={handleEmail}
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Jenis Kelamin
                      </label>
                      <select
                        id="country"
                        value={jenis_kelamin}
                        onChange={handleJenisKelamin}
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option selected value=""></option>
                        <option selected value="Laki-Laki">
                          Laki-Laki
                        </option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        value={tanggal_lahir}
                        onChange={handleTanggalLahir}
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Konsultasi;
