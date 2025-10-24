import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data, Navigate } from "react-router-dom";


const Profile = () => {    
  
const userData = useSelector( (state) => state.userReducer ) ;    
    
     if( !userData.isAuthenticated ){ return <Navigate to="/" replace />;  }

     
  const dispatch = useDispatch();
  const accessToken = useSelector( (state) => state.userReducer.accessToken ) ;

  //console.log("access token ", accessToken );
    useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            "Authorization": accessToken,
          },
        });
        console.log("here is the response ",response);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        

        const receivedData = await response.json();
        console.log("received  data is ",receivedData  ) ;
   
        dispatch({
          type: "updateUserDetails",
          payload: { ...receivedData },
        });
      
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []); 


    console.log("userData" , userData);
    // user is authenticated 
    return(
        <>
    <div className="card text-center profile-card">
    <div className="card-header bg-primary text-white">
      <h4>User Profile</h4>
    </div>
    <div className="card-body">
  <img
    src={userData.image}
    alt={userData.firstName + " " + userData.lastName}
    className="profile-img shadow"
  />
  <h5 className="mt-3">{userData.firstName + " " + userData.lastName}</h5>
  <p className="text-muted mb-1">{userData.username}</p>

  <p><strong>User ID:</strong> {userData.id}</p>
  <p><strong>Email:</strong> {userData.email}</p>
  <p><strong>Gender:</strong> {userData.gender}</p>
  <p><strong>Age:</strong> {userData.age}</p>
  <p><strong>Phone:</strong> {userData.phone}</p>
</div>

    </div> 
        </>
    );
}
    
export default Profile ;