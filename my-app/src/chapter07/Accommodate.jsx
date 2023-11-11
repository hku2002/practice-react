import React, { useState, useEffect } from "react";
import useCounter from "./UseCounter"

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("== 의존성 배열이 없는 useEffect ==");
        console.log("useEffect is called");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        console.log("## 의존성 배열이 존재하는 useEffect ##");
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명을 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
