import React, { useState } from "react";
import Main from "./components/Main/Main";
import Done from "./components/Done/Done";

function App() {
  const [clickedNumber, setClickedNumber] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="App">
      {!isSubmitted && (
        <Main
          clickedNumber={clickedNumber}
          setClickedNumber={setClickedNumber}
          setIsSubmitted={setIsSubmitted}
        />
      )}
      {isSubmitted && <Done clickedNumber={clickedNumber} />}
    </div>
  );
}

export default App;
