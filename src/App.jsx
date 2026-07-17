import { useReducer } from "react";
import { reducer, initialState } from "./formReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Double Counter</h1>

      <h2>Counter A: {state.counterA}</h2>

      <button onClick={() => dispatch({ type: "DECREMENT_A" })}>
        - A
      </button>

      <button onClick={() => dispatch({ type: "INCREMENT_A" })}>
        + A
      </button>

      <br />
      <br />

      <h2>Counter B: {state.counterB}</h2>

      <button onClick={() => dispatch({ type: "DECREMENT_B" })}>
        - B
      </button>

      <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
        + B
      </button>

      <br />
      <br />

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset Both
      </button>
    </div>
  );
}

export default App;