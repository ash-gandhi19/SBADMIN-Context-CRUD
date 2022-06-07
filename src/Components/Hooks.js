import React, { useState, useEffect, useRef } from "react";

function Hooks() {
  let [name, setName] = useState("");
  let renderCount = useRef(0);

  useEffect(() => {
    // renderCount.current.focus();
    renderCount.current += 1;
  });

  return (
    <>
      <input
        value={name}
        ref={renderCount}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        My name is {name} I am rendering {renderCount.current} times
      </div>
    </>
  );
}

export default Hooks;
