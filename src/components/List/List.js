import ReactDOM from "react-dom";
import React from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import {deleteTask} from "../../actions";

import "./List.css";
const List = (props) => {
  const taskComplete = () => {
    console.log(props);
    let element = document.querySelector(".task-message");
    ReactDOM.findDOMNode(element).style.textDecoration = "line-through";
  };
  return (
    <ul>
      {props.tasks.map((tasks, index) => (
        <li key={index}>
          <button onClick={taskComplete}>
            Complete
            <FontAwesomeIcon icon={faCheck} color="#339AF0" />
          </button>
          <span className="task-message" id={tasks.id}>
            {tasks.message}
          </span>
          <button onClick={() => props.dispatch(deleteTask(tasks.id))}>
            Cancel
            <FontAwesomeIcon icon={faTimes} color="red" />
          </button>
        </li>
      ))}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  tasks: state.tasks.data,
});
export default connect(mapStateToProps)(List);
