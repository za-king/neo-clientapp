import AuthContext from "./authContext";
import { useReducer } from "react";
import authReducer from "./authReducer";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Swal from 'sweetalert2'
import * as api from "../../api";
import { GET_DATA, LOAD_USER, LOGGIN, LOGGOUT, REGISTER } from "../types";

const AuthState = ({ children }) => {

  const cookies = new Cookies();

  
  const navigate = useNavigate();
  const initialState = {
    loading: true,
    user: null,
    error: null,
    token:cookies.get('token2'),
    isAuthenticated:false
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  
  //FUNGSI

  const GetData = async () => {
    const { data } = await api.fetchEvent();
    try {
      dispatch({ type: GET_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  
  const Register = async (data) => {
    
    const res = await api.registerApi(data);
    try {
      dispatch({ type: REGISTER, payload: res });
      
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async (username, password) => {
    const data = { username: username, password: password };
    const res = await api.loginApi(data);
    console.log(res.data)
    if(res.data.error === "User Does'nt Exist" ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: res.data.error,
      })
      navigate("/login");
    }else if(res.data.error === "wrong pass  and username"){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: res.data.error,
      })
      navigate("/login");
    }else{
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Login',
        showConfirmButton: false,
        timer: 1500
      })
      try {
        dispatch({ type: LOGGIN, payload: res });
        LoadUser()
        navigate("/event");
      } catch (error) {
        console.log(error);
      }
    }
    
  };
  const Logout = async () => {
    
    try {
      dispatch({ type: LOGGOUT, });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const LoadUser =  async () =>{
    const id = localStorage.getItem('id')
    const res = await api.loadUserApi(id)
    try {
      dispatch({ type: LOAD_USER, payload: res.data });
    } catch (error) {
      console.log(error)
    }
  }

  const value = { GetData, Login,Logout, state ,Register ,LoadUser};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthState;
