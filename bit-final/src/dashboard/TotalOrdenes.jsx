
const TotalOrdenes = (props) => {
    const data = props;
    const total = data.dataCart.length;

  return (
    <div className="totalOrdenes">
        <h2>Total ordenes realizadas:
          <div className="item">
          {total}
          </div>
        </h2>
          
    </div>
  )
}

export default TotalOrdenes
