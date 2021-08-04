import React from 'react';
import {Link} from 'react-router-dom';
import './delete-post.css';
function DeletePost(props) {
    return (
        <>
          <div className="delete-body">
              <div className="content">
                  <h2>Post Delete Successfull</h2>
                  <Link to="/" className="home-btn">Go to Home</Link>
              </div>
          </div>
        </>
    );
}

export default DeletePost;