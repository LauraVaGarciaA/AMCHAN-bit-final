import infographic from "../images/infographic.png"
import './Panel.css';

const PromPrecioArticulos = (props) => {
    const data = props;

    const sum = data.dataProductos.reduce((accumulator, item) => accumulator + item.price, 0);
    const average = Math.round((sum / data.dataProductos.length)*100)/100;

    return (
    <div>
        <h2>Precio promedio de productos:
            <div className="item">
            ${average}
            </div>
            <img className='infographic' src={infographic}></img>
        </h2>
            
    </div>
    )
}

export default PromPrecioArticulos
