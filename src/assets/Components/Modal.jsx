import React from 'react'

function Modal() {
  return (
    <div className=' flex absolute w-full  justify-center '>
     
      
        <div className="modal-box">
          <h3 className="font-bold text-lg font-text ">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      
    </div>
  );
}

export default Modal