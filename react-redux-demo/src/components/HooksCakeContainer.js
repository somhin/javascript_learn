import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCkaes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCkaes}</h2>
      <h3>from react redux hooks</h3>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
      <hr />
    </div>
  );
}

export default HooksCakeContainer;
