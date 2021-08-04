import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./single-item.css";
import { deletePost } from "../../../Redux/Distribution/action";
function SingleItem({ currentPost, deletePost }) {
  return (
    <div className="show-item">
      {currentPost.length > 0 && (
        <div className="card">
          <div className="imgBx">
            <img
              src={`https://picsum.photos/${
                Math.floor(Math.random() * (350 - 200 + 1)) + 200
              }`}
              alt={currentPost[0].title}
            />
          </div>
          <div className="contextBx">
            <p className="uid">
              <u>Id:</u> {currentPost[0].id}
            </p>
            <p className="uid">
              <u>UserId:</u> {currentPost[0].userId}
            </p>
            <p className="uid">
              <u>Title:</u> {currentPost[0].title}
            </p>
            <p className="uid">
              <u>Body:</u> {currentPost[0].body}
            </p>
            <div className="btns">
              <Link
                className="details-btn"
                to={`/delete?id=${currentPost[0].id}`}
                onClick={() => deletePost(currentPost[0].id)}
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPost: state.dataReducer.currentPost,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
