import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <p>The app is live at https://harmeet773.github.io/dummy-authentication-using-redux</p>

            <p> This app is using api's from https://dummyjson.com/ for authentication.
                Login component fetches access token and refresh token from 'https://dummyjson.com/auth/login' 
                by provideing user credentials and stores in it redux store.
            </p>
            <p> Profile component fetches user data from 'https://dummyjson.com/auth/me' by providing access token</p>

        </div>
    );
}

export default Home;