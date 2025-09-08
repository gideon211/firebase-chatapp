import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  try {
    // Create user
    const res = await createUserWithEmailAndPassword(auth, email, password);

    // Update profile
    await updateProfile(res.user, { displayName });

    // Save user in Firestore
    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      displayName,
      email,
    });


    await setDoc(doc(db, "userChats", res.user.uid), {})
          navigate("/")
    

    console.log("User registered successfully:", res.user);
  } catch (err) {
    console.error("Signup error:", err);
    setErr(true);
  }
};


  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <div className="flex flex-col bg-white py-[20px] px-[60px] rounded-md gap-[10px] items-center">
        <h1 className="font-bold text-2xl text-blue-900">We Talk!</h1>
        <p className="text-blue-900 text-sm">Register</p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="p-3 border-b-1 focus:border-b-blue-400 border-b-gray-300 outline-none placeholder-gray-400 placeholder:text-sm w-[18rem]"
            type="text"
            placeholder="name"
          />
          <input
            className="p-3 focus:border-b-blue-400 border-b-1 border-gray-300 outline-none placeholder-gray-400 placeholder:text-sm"
            type="email"
            placeholder="email"
          />
          <input
            className="p-3 focus:border-b-blue-400 border-b-1 border-b-gray-300 outline-none placeholder-gray-400 placeholder:text-sm"
            type="password"
            placeholder="password"
          />

          
          <input type="file" id="file" style={{ display: "none" }} />
          <label
            htmlFor="file"
            className="flex items-center gap-[10px] text-blue-900 cursor-pointer"
          >
            <img src={Add} alt="" className="w-[30px]" />
            <span className="text-sm">Add Avatar (not active)</span>
          </label>

          <button className="bg-blue-300 p-[10px] font-medium cursor-pointer text-white rounded-md border-none">
            Sign Up
          </button>

          {err && <span className="text-red-500 text-xs">Something Went Wrong</span>}
        </form>

        <p className="text-sm text-blue-900">Already have an account? <Link to="/Login" className="font-medium"> Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
