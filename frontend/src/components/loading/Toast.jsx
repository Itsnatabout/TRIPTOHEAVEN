
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'; 

const ToastNotification = () => {
  const notify = () => toast('(｡•̀ᴗ-)✧ Successfully Submitted!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  
  return (
    <div className="toast-notification">
      <button onClick={notify} className="toast-button">Submit</button>  {/* pansamantala lang to na button boi edit mo nalang */}
      <ToastContainer />
    </div>
  );
};

export default ToastNotification;
