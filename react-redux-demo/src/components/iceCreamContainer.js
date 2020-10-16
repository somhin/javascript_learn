import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecreams - {props.numofIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numofIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispachToProps)(IceCreamContainer);
