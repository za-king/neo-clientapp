import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import {useNavigate} from 'react-router-dom'
import AuthContext from "../context/auth/authContext";
function Profile() {
  const authcontext = useContext(AuthContext);
  const { state, LoadUser, Logout } = authcontext;

  const userId = localStorage.getItem("id");

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/orders`).then((res) => {
      setData(res.data);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}/konsuls`).then((res) => {
      setData2(res.data);
    });
    setLoading(false);
  }, []);
  const handleLogout = () => {
    Logout();
    LoadUser();
  };

  

 
 console.log(data)
  return (
    <div className="min-h-screen max-h-full py-24">
      <div className=" m-12 grid lg:grid-cols-4 sm:grid-cols-1 ">
        <div className="lg:col-span-1  sm:col-span-1">
          <div className="m-4 h-[20rem] rounded shadow-lg">
            <p className="font-bold text-2xl text-gray-400 p-4">Hai </p>
            <p className="font-bold text-3xl text-gray-600 text-center">
              {state.user && state.user.username}
            </p>
            <div
              className="font-bold text-2xl text-gray-400 p-4 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>
        </div>
        <div className=" lg:col-span-3  sm:col-span-1">
          <div className="m-4  h-full rounded-lg shadow-xl">
            <p className="font-bold text-3xl text-gray-600 text-center mb-4">
              Riwayat Pendaftaran
            </p>

            <div className="p-4">
              <div>
                <p className="font-bold text-2xl text-gray-600">Event</p>
                {data.map((value) => {
                  if (parseInt(userId) === value.UserId)
                    return (
                      <div className="h-full border m-2 shadow flex rounded cursor-pointer">
                        <img
                          src={value.Event.url}
                          alt=""
                          width={120}
                          className="mr-8"
                        />

                        <div className="flex flex-col w-full">
                          <p className="text-lg font-bold my-2">
                            {value.Event.event_name}
                          </p>
                          <p className="font-bold text-md text-gray-600 my-2">
                            Rp {value.Event.price}
                          </p>
                          <div className="flex font-bold text-md text-gray-400 ">
                            Kode Order:
                            <p className="mx-2 mb-2">{value.uuid}</p>
                          </div>
                          {/* <div className="flex font-bold text-md text-gray-400 ">
                            Waktu Kadarluarsa:
                            <p className="mx-2 mb-2">{moment(value.order_time_limit).format('MMMM Do YYYY, h:mm:ss a')}</p>
                          </div> */}

                          <div className="flex justify-between">
                            
                           
                         
                            <div
                             onClick={()=>{
                              navigate(`/uploadevent/${value.id}`)
                             }}
                            >
                               
                               <p className="font-bold text-lg text-gray-400 ">
                                Upload Bukti Pembayaran
                              </p>
             
                              
                              
                            </div>
                            <p
                              className={
                                value.isComplete
                                  ? "bg-green-300 rounded w-max mb-4 px-4 font-bold text-md text-gray-400"
                                  : "bg-red-300 rounded w-max mb-4 px-4 font-bold text-md text-gray-400"
                              }
                            >
                              {value.isComplete ? "sudah melakukan pembayar" : "menunggu konfirmas admin"}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                })}
              </div>
              <div>
                <p className="font-bold text-2xl text-gray-600">Konsultasi</p>
                {data2.map((value) => {
                  if (parseInt(userId) === value.UserId) {
                    return (
                      <div className=" h-full border py-8 shadow  flex flex-col">
                        <div className="ml-8">
                          <p className="text-lg font-bold my-2">{value.nama}</p>
                          <p className="text-slate-700 my-2">{value.email}</p>
                          <p className="my-2">{value.nomor_wa}</p>
                          <div className="flex justify-between">
                          <p
                              className={
                                value.isComplete
                                  ? "bg-green-300 rounded w-max mb-4 px-4 font-bold text-lg text-gray-400"
                                  : "bg-red-300 rounded w-max mb-4 px-4 font-bold text-lg text-gray-400"
                              }
                            >
                              {value.isComplete ? "sudah bayar" : "menunggu konfirmas admin"}
                            </p>
                            <div
                              onClick={() => {
                                alert(value.Event.price);
                              }}
                            >
                              <div
                             onClick={()=>{
                              navigate(`/uploadKonsul/${value.id}`)
                             }}
                            >
                               
                               <p className="font-bold text-lg text-gray-400 ">
                                Upload Bukti Pembayaran
                              </p>
             
                              
                              
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
