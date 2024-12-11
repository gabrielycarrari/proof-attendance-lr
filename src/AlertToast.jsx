 import React from 'react'

const AlertToast = ({ color, mensage }) => {
    console.log('AlertToast', color, mensage);
    return (
        <div
            className={`toast align-items-center text-bg-${color} border-0 show position-fixed top-0 end-0 p-3 mt-3`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ zIndex: 1050 }}
        >
            <div className="d-flex">
                <div className="toast-body">
                    {mensage}
                </div>
                <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
        </div>

    )
}

export default AlertToast