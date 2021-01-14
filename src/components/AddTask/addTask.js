import React from "react";
import {connect} from "react-redux";
import {addTask} from "../../actions";

import "./addTask.css";

const AddTask = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        let input = event.target.tname.value;
        props.dispatch(addTask(input));
        event.target.tname.value = "";
      }}
    >
      <input className="addInput" type="text" name="tname"></input>
    </form>
  );
};

export default connect()(AddTask);
