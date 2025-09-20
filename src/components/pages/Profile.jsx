import React from 'react'
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const {user,logout} = useAuth();
  const navigate = useNavigate()

  const logoutClick = () => {
    logout();
    navigate("/")
  }
  return (
    <div className='profile_section'>
      <div className="catagory_detail">
        <h1 className='text-success'>Welcome: {user.email}</h1>
        <ul className=" list-unstyled d-flex gap-2">
          <li>
            <a className="text-decoration-none text-black" href="/">
              Home{" "}
            </a>
          </li>
        </ul>
        <button onClick={logoutClick} className=' btn btn-danger'>Logout</button>
      </div>
      
    </div>
  )
}
export default Profile
