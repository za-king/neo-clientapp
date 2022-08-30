import React, { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import AuthContext from "../context/auth/authContext";

function Register() {
  const authcontext = useContext(AuthContext);

  const { Register } = authcontext;

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    console.log(data);
    Register(data);
  };
  return (
    <div>
      <div className="bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-center">
        <div className="bg-white w-[320px] h-[400px] shadow-xl rounded-lg">
          <div className="flex justify-center p-5 ">
            <div className="pr-2">
              <img src="Neo-people-logo.png" width={30} height={30} alt="neo" />
            </div>

            <p className="font-serif text-lg font-medium">Neo People</p>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="flex flex-col ml-12">
                <div>
                  <label className="text-black font-medium">Username</label>
                  <div>
                    <ErrorMessage
                      name="username"
                      component="span"
                      className="text-red-500"
                    />
                  </div>

                  <div className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                    <Field
                      id="inputCreatePost"
                      name="username"
                      placeholder="username"
                      className="w-full h-full outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-black font-medium">Password</label>
                  <div>
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-red-500"
                    />
                  </div>

                  <div className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                    <Field
                      id="inputCreatePost"
                      name="password"
                      placeholder="**********"
                      className="w-full h-full outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#FF5800] rounded-full m-4 mt-20 w-[200px] h-[35px] hover:bg-[#FF1800] shadow-md"
                >
                  Buat Akun
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
