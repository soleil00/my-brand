import React from "react";

const LoginPopup = () => {
  return (
    <div class="soleil-overlay ov2" id="soleil-overlay">
      <div class="popup">
        <h3 class="svg-cont">
          <svg
            class="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ce3680"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"
            />
          </svg>
          Login Required
        </h3>
        <p>
          To <span id="acts"></span>, please log in or sign up.
        </p>
        <button class="btn btn-login" onclick="login()">
          Login
        </button>
        <button class="btn btn-cancel" onclick="cancel()">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
