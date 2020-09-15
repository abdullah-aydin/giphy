import React, { useRef, useState } from "react";
import Spinner from "../Spinner";
import "./Modal.scss";

const Modal = ({ show, setShow, data }) => {
  const ref = useRef(null);

  const [loading, setLoading] = useState(true);

  // modal show=false, when overlay onClick
  window.onclick = function (event) {
    if (event.target === ref.current) {
      setShow(false);
    }
  };

  console.log(data);

  return (
    <div id="overlay" ref={ref}>
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
          {loading && <Spinner />}
          <img
            src={data.images.downsized.url}
            alt="data.title"
            className="data-image"
            style={loading ? { display: "none" } : { display: "inline-block" }}
            onLoad={() => setLoading(false)}
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
  );
};

export default Modal;
