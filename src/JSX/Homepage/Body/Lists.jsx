import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import "./body.css";
import axios from "axios";
import { setAllData } from "../../../Redux/Distribution/action";
function Lists({ setAllData, data }) {
  useEffect(() => {
    //wnenever our data is empty get request execute
    if (data.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setAllData(res.data);
          console.log("request");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="body-listing">
      <div className="contents">
        {data.map((val, i) => {
          return <Card key={i} val={val} />;
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.dataReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAllData: (data) => dispatch(setAllData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
