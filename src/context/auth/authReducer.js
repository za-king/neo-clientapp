import Cookies from "universal-cookie";
import Swal from 'sweetalert2'
import { GET_DATA, LOAD_USER, LOGGIN, LOGGOUT, REGISTER } from "../types";
const authReducer = (state, action) => {
  const cookies = new Cookies();

  switch (action.type) {
    case GET_DATA:
      return console.log(action.payload);

    case REGISTER:
      return (Swal.fire({
        icon: 'success',
        title: 'Berhasil membuat Akun',
        showConfirmButton: false,
        timer: 1500
      }))
    case LOGGIN:
      
        cookies.set("token2", action.payload.data.accesToken, { path: "/" });
        localStorage.setItem("id", action.payload.data.id);
      
      
      return {
        ...state,
        loading: false,
        user: action.payload.data,
        isAuthenticated: true,
      };
    case LOGGOUT:
      cookies.remove("token2");
      localStorage.removeItem("id");
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      }

    case LOAD_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      break;
  }
};

export default authReducer;
