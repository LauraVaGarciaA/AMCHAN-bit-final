import { useState, useEffect } from "react";
import money from "../images/money.png"
import axios from "axios";
import './Panel.css';


const TotalIngresos = (props) => {
    const [totalIngresos, setTotalIngresos] = useState(0);
    const data = props;

    useEffect(() => {
        const precioProducto = async (productId) => {
            try {
                const val = await axios.get(`${data.data.API}/products/${productId}`);
                const productos = val.data;
                return productos.price;
            } catch (error){
                alert(`Se presentó un error al obtener el precio del producto ${productId}: ${error.message}`);
            return 0;
            }
        };

        const calculoIngresos = async () => {
            try {
                const val = await axios.get(`${data.data.API}/carts`);
                const ecome = val.data;
                let totalIngresos = 0;
                for (const ecom of ecome){
                    let subtotal =0;
                    for (const productos of ecom.products){
                        const precio = await precioProducto(productos.productId);
                        subtotal += precio*productos.quantity;
                    }
                    totalIngresos += subtotal;
                }
                setTotalIngresos(totalIngresos.toFixed(3));
            } catch(error){
                alert(`Se presentó un error al obtener el total de ingresos: ${error.message}`);
            }
        };

            calculoIngresos();
    }, []); 


  return (
    <div>
        <h2>Total Ingresos: 
            <div className="item">
            ${totalIngresos}
            </div>
            <img className='money' src={money}></img>
        </h2>
    </div>

  );
};

export default TotalIngresos
