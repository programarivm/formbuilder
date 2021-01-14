import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../actions/counterActions";

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increaseCount())}>+</button>
      <button onClick={() => dispatch(decreaseCount())}>-</button>
    </main>
  );
};

export default Counter;
