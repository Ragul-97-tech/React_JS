import { Button } from "./StudentCard";

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