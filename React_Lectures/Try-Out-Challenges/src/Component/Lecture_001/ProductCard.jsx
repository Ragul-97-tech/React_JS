
function ProductCard({products}) {
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
                {products.map(product => {
                    return <tr key={product.name}>
                        <th>{product.name}</th>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default ProductCard;