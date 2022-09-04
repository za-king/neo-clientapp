import React, { useState, useEffect,useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";
import Cookies from "universal-cookie";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import Swal from 'sweetalert2';



function EventDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const UserId = localStorage.getItem("id");
  

  const cookies = new Cookies();
  const uuid = uuidv4();
  const navigate = useNavigate();

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

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/events/byId/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  console.log(data);

  const handlePesan = () => {
    if(cookies.get("token2") === undefined){
      alert()
    }else{

      alertSucces()
      axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/orders`,
        {
          UserId: UserId,
          EventId: id,
          isComplete: false,
          uuid: uuid,
        },
        {
          headers: {
            accessToken: cookies.get("token2"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/profile")
      })
      
    }
  
  };
  return (
    <div className="py-24 min-h-screen w-full max-h-full  bg-gray-200">
      <div className="bg-white w-[80%] h-full shadow-xl rounded-lg m-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 py-4 ">
          <div className="m-auto">
            <div className="">
              <img
                src={data.url}
                alt=""
                className=" p-8 rounded "
                width={700}
              />
            </div>
          </div>
          <div className="m-auto ">
            <p className="text-4xl font-extrabold text-gray-900 mb-4">
              {data.event_name}
            </p>
            <p className="mb-8">
              {data.date} | {moment(data.started_at, "HH:mm:ss").format("hh:mm A")}-
              {moment(data.finish_at, "HH:mm:ss").format("hh:mm A")}
            </p>
            <p className="text-2xl font-extrabold text-gray-900  ">
              Harga : Rp {data.price}
            </p>
            <p>Mentor : {data.speakers}</p>
            <p>{data.description}</p>

            <button
              disabled={data.disable}
              onClick={() => {
                handlePesan();
              }}
              type="submit"
              className={
                data.disable
                  ? "mt-6 w-full bg-gray-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  : "mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }
            >
              Pesan
            </button>
            {data.disable ? <p>Mohon Maaf Event ini sudah tidak tersedia</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
