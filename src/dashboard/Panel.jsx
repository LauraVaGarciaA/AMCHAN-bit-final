import TotalProductos from "./TotalProductos";
import { useState, useEffect } from "react";
import PromPrecioArticulo from "./PromPrecioArticulos";
import TotalOrdenes from "./TotalOrdenes";
import ArticulosMasVendidos from "./ArticulosMasVendidos";
import TotalIngresos from "./TotalIngresos";
import axios from "axios";
import './Panel.css';


 const Panel = (props) => {
    const [dataProducts, setDataProducts] = useState([]);
    const [dataCart, setDataCart] = useState([]);
    const data = props;

    async function conectarAPI(endpoint, setData){
        await axios(`${data.API}/${endpoint}`)
        .then((res) => setData(res.data))
        .catch((err)=> console.error(err))
    }


    useEffect(() => {
      conectarAPI('products',setDataProducts)
      }, [])
    
      useEffect(() => {
        conectarAPI('carts',setDataCart)
      }, [])

  return (
    <div className="panel">
      
      <div className="container">
        <TotalProductos dataProductos={dataProducts} />
      </div>

      <div className="container">
        <TotalOrdenes dataCart={dataCart} />
      </div>

      <div className="container">
      <TotalIngresos data={data} />
      </div>

      <div className="container">
        <PromPrecioArticulo dataProductos={dataProducts} />
      </div>
      
      <div className="container">
      <ArticulosMasVendidos dataCart={dataCart} />
      </div>
      
    </div>
  )
 }

export default Panel
