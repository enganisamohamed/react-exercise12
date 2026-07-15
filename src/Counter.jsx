import React, { useReducer } from "react";
import { counterReducer, initialState } from "./counterReducer";

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={state.count === 0}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{ marginLeft: "10px" }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;