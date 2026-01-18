import { useState } from "react";
import Button from "../Button";

export default function Counter() {
    const [count, setCounter] = useState(10);
    return (
        <div>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <Button action={() => setCounter(count+1)}>Increment</Button>
            <Button action={() => setCounter(count-1)}>Decrement</Button>
        </div>
    );
}