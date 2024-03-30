import React, { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getApiCall();
  }, []);

  async function getApiCall() {
    const data = await fetch("");
    const json = await data.json();
    console.log(json);
    // setData(json);
  }

  return (
    <div>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
