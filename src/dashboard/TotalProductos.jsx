import industry from '../images/inventory.png';
import './Panel.css';

const TotalProductos = (props) => {
    const data = props;
    const productos = data.dataProductos.length;

  return (
    <div className="total-productos">
        <h2>Total productos de la tienda :
          <div className="item">
          {productos}
          </div>
          <img className='industry' src={industry}></img>
        </h2>
        </div>
  )
}

export default TotalProductos
