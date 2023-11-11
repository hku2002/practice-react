import React, { useState } from "react";

function useCounter(initValue) {
    const [count, setCount] = useState(initValue);

    const increaseCount = () => setCount(count => count + 1);
    const decreaseCount = () => setCount(count => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
