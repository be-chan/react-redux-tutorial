import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

function reducer(state, action) {
  switch (action.type) {
    case "increment_count":
      return {
        ...state,
        count: state.count + 1
      };
    case "decrement_count":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return {
        ...state
      };
  }
}

const INTIAL_STATE = {
  count: 0
};

const store = createStore(reducer, INTIAL_STATE);

const Sample = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    function incrementCount() {
      dispatch({
        type: "increment_count"
      });
    }

    function decrementCount() {
      dispatch({
        type: "decrement_count"
      });
    }

    return (
      <div>
        <h1>Counter: {count} </h1>
        <button onClick={incrementCount}>プラス</button>
        <button onClick={decrementCount}>マイナス</button>
      </div>
    );
  }
};

export default Sample;
