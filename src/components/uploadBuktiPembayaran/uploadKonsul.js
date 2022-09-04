import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
const UploadKonsul = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [image, setImage] = useState(null);
  // const [uuid, setUuid] = useState("");
  const [nama_rekening_pengirim, setNama_rekening_pengirim] = useState("");
  const [no_rekening_pengirim, setNo_rekening_pengirim] = useState("");
  const [nama_rekening_penerima, setNama_rekening_penerima] = useState("");
  const [no_rekening_penerima, setNo_rekening_penerima] = useState("");
  const navigate =useNavigate()
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/konsuls/byId/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const alertSucces =() =>Swal.fire({
    
    icon: 'success',
    title: 'Berhasil Daftar Upload Bukti Pembayaran',
    showConfirmButton: false,
    timer: 1500
  },
  
  )

  const getFileInfo = (e) => {
    //NOTE THE ADDITION OF 'e' PARAMETER
    console.log("File info working!");

    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleNama_rekening_pengirim = (e) => {
    const result = e.target.value;
    setNama_rekening_pengirim(result);
    console.log(result);
  };
  const handleNo_rekening_pengirim = (e) => {
    const result = e.target.value;
    setNo_rekening_pengirim(result);
    console.log(result);
  };
  const handleNama_rekening_penerima = (e) => {
    const result = e.target.value;
    setNama_rekening_penerima(result);
    console.log(result);
  };

  const handleNo_rekening_penerima = (e) => {
    const result = e.target.value;
    setNo_rekening_penerima(result);
    console.log(result);
  };

  const handleCreatePembayaran = (e) => {
    const formdata = new FormData();

    formdata.append("image", image);
    formdata.append("kode_order", data.uuid);
    formdata.append("nama_rekening_pengirim", nama_rekening_pengirim);
    formdata.append("no_rekening_pengirim", no_rekening_pengirim);
    formdata.append("nama_rekening_penerima", nama_rekening_penerima);
    formdata.append("no_rekening_penerima", no_rekening_penerima);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/buktikonsul`, formdata)
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
      alertSucces()
      navigate('/profile')
  };
  console.log(id)
  return (
    <div className="h-screen py-24 ">
      <div className="grid grid-cols-3">
        <div></div>

        <div>
          <h1 className=" text-center my-12">Upload Bukti Pembayaran Konsultasi</h1>
          <form action="">
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Bukti Transfer
              </label>
              <input
                type="file"
                onChange={getFileInfo}
                name="image"
                id="image"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="Nama_rekening_pengirim"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Rekening Pengirim
              </label>
              <input
                type="text"
                onChange={handleNama_rekening_pengirim}
                name="Nama_rekening_pengirim"
                id="Nama_rekening_pengirim"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="Nama_rekening_pengirim"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor Rekening Pengirim
              </label>
              <input
                type="text"
                onChange={handleNo_rekening_pengirim}
                name="Nama_rekening_pengirim"
                id="Nama_rekening_pengirim"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="Nama_rekening_penerima"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Rekening Penerima
              </label>
              <input
                type="text"
                onChange={handleNama_rekening_penerima}
                name="Nama_rekening_penerima"
                id="Nama_rekening_penerima"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="No_rekening_penerima"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor Rekening Penerima
              </label>
              <input
                type="text"
                onChange={handleNo_rekening_penerima}
                name="No_rekening_penerima"
                id="No_rekening_penerima"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="Nama_rekening_pengirim"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor Kode Order
              </label>
              <p>{data.uuid}</p>
            </div>

            <div>
              <button
                onClick={handleCreatePembayaran}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default UploadKonsul;
