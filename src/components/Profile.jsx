import React from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

//   useEffect(() => {
//     const id = localStorage.getItem("userId");
//     if (!id) {
//       setError("No user ID found. Please login first.");
//       return;
//     }

//     fetch(`https://dummyjson.com/users/${id}`)
//       .then(async (res) => {
//         if (!res.ok) {
//           const errData = await res.json().catch(() => ({}));
//           throw new Error(errData.message || "Failed to fetch user data");
//         }
//         return res.json();
//       })
//       .then((data) => setUser(data))
//       .catch((err) => setError(err.message));
//   }, []); 

const Profile = () => {    
        const dispatch = useDispatch();
     const userData = useSelector( (state) => state.userReducer ) ;    
     if( !userData.isAuthenticated ){ return <Navigate to="/" replace />;  }
    console.log("userData" , userData);
    // user is authenticated 
    return(
        <>
    <div className="card text-center profile-card">
    <div className="card-header bg-primary text-white">
      <h4>User Profile</h4>
    </div>
    <div className="card-body">
      <img src={userData.image} alt={userData.firstName +" "+ userData .lastName} className="profile-img shadow" />
      <h5 className="mt-3">{userData.firstName +" "+ userData .lastName} </h5>
      <p className="text-muted mb-1">  {userData.username}  </p>
      <p><strong>User ID:</strong>  {userData.id} </p>
      <p><strong>Email:</strong> {userData.email}  </p>
      <p><strong>Gender:</strong> {userData.gender}  </p>
      
    </div>
    {/* <div className="card-footer text-muted">
      Last updated just now
    </div>
  */}</div> 
        </>
    );
}
    
export default Profile ;