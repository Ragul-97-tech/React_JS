import { useState } from "react";
import Button from "../Button";

export default function ProductStatus() {
    const [stockCount, setStock] = useState(10);
    return (
        <div>
            <p>Product Status: </p>
            <h2>{stockCount >= 5 ? "In Stock" : stockCount >= 1 ? "Low Stock" : stockCount < 0 ? setStock(count => count = 0) : "Out of Stock"}</h2>
            <p>Product Count: </p>
            <h2>{stockCount}</h2>
            <Button action={() => setStock(count => count-1)}>Sell Stock</Button>
            <Button action={() => setStock(count => count+1)}>Buy Stock</Button>
        </div>
    );
}