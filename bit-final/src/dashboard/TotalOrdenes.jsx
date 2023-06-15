import truck from '../images/shipment.png';
import './Panel.css';

const TotalOrdenes = (props) => {
    const data = props;
    const total = data.dataCart.length;

  return (
    <div className="totalOrdenes">
        <h2>Total ordenes realizadas:
          <div className="item">
          {total}
          </div>
          <img className='truck' src={truck}></img>
        </h2>
    </div>
  )
}

export default TotalOrdenes
