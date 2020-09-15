import React from "react";
import "./Modal.scss";

const Modal = ({ show, setShow, data }) => {
  return (
    show && (
      <div className="overlay" onClick={() => setShow(false)}>
        <div className="modal">
          <div className="modal-body">
            <p
              className="modal-close"
              type="button"
              onClick={() => setShow(false)}
            >
              ← Back
            </p>
            <p className="data-title">{data.title}</p>
            <img
              src={data.images.original.url}
              alt="data.title"
              className="data-image"
            />
            {data.username !== "" && (
              <a href={data.user.profile_url} className="data-user">
                <img src={data.user.avatar_url} alt="" className="avatar" />
                <p className="username">{data.username}</p>
              </a>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
