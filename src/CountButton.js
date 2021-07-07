import React, { useState } from "react";

function CountButton () {
    let [count, setCount] = useState(0);

    return(
        <section>
            <button onClick={() => setCount(count += 1)}>Click Count: {count}</button>
        </section>);
}

export default CountButton;