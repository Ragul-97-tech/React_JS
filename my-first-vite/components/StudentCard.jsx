import { useState } from "react";

function GreetingCard({ name, course }) {
    return (
        <>
            <h1>Good {new Date().getHours() > 12 ? "Morning" : "Evening"}</h1>
        </>)
}

function FirstComponent() {
    return <h1>Hello, React!</h1>
}

function ReactClub() {
    return <header><h1>React Learning Club</h1></header>
}

function ProductCard(product) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {product.map(ele => <th>{ele}</th>)}
            </tbody>
        </table>
    );
}

export function CounterCard({ children, padding }) {
    const [count, setCount] = useState(0);
    const [bool, show] = useState(false);
    function handleClick() {
        setCount(count => count + 1);
        setCount(count => count + 1);
        console.log(count);
    }
    return (<div>
        <p>Count: {count}</p>
        <Button action={handleClick}>{children}</Button>
        <Button action={() => show(!bool)} pad={padding}>Toggle</Button>
        {bool && <p>Hi Everyone</p>}
    </div>)
}

function StudentCard({ children }) {
    function handleClick() {
        console.log("Button Clicked");
    }
    return (
        <>
            <div>Welcome Everyone</div>
            <div>Student Card Component
                <p>Name  : Ragul</p>
                <p>Course: Java</p>
            </div>
            <Button action={handleClick}>{children}</Button>
        </>)
}

export function Button({ action, children, pad }) {
    return <button onClick={action} style={{padding: {pad}}}>{children}</button>
}

export { FirstComponent, ReactClub, StudentCard };
export default GreetingCard;