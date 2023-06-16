import rating from "../images/rating.png"
import './Panel.css';
const ArticulosMasVendidos = (props) => {

  const data = props;
  const dataCart = data.dataCart
  const productMap = new Map();

  dataCart.forEach(entry => {
    entry.products.forEach(product => {
      const productId = product.productId;
      const quantity = product.quantity;

      if (productMap.has(productId)){
        productMap.set(productId, productMap.get(productId) + quantity);
      } else {
        productMap.set(productId, quantity);
      }
    });
  });

  const sortedMap = new Map([...productMap.entries()].sort((a, b) => b[1]- a[1]));

  sortedMap.forEach((quantity, productId) => {
    console.log(productId + quantity);
});

  
  return (
    <div className="container">
      <h2>Top 10 de artículos más vendidos:
      <table>
    <thead>
        <tr>
            <th>ID Producto</th>
            <th>Cantidad</th>
        </tr>
    </thead>
    <tbody>
        {Array.from(sortedMap.entries()).map(([productId, quantity]) => (
            <tr key={productId}>
                <td>{productId}</td>
                <td>{quantity}</td>
            </tr>
        ))}
    </tbody>
    </table>
    <img className='rating' src={rating}></img>
      </h2>
    </div>
  )
}

export default ArticulosMasVendidos