import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentPost } from "../../../Redux/Distribution/action";
import "./card.css";
function Card({ loadCurrentPost, val }) {
  return (
    <>
      {val && (
        <div className="card">
          <div className="imgBx">
            <img
              src={`https://picsum.photos/${
                Math.floor(Math.random() * (350 - 200 + 1)) + 200
              }`}
              alt="title"
            />
          </div>
          <div className="contextBx">
            <p className="title">{val.body}</p>
            <div className="btns">
              <Link
                className="details-btn"
                to={`/post?id=${val.id}`}
                onClick={() => loadCurrentPost(val.id)}
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentPost: (id) => dispatch(loadCurrentPost(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
