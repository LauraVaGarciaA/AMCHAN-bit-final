import { useState, useEffect } from "react";
import axios from "axios";

const TotalIngresos = (props) => {
    const [totalIngresos, setTotalIngresos] = useState(0);
    const data = props;

    useEffect(() => {
        const precioProducto = async (productId) => {
            try {
                const val = await axios.get(`${data.data.API}/products/${productId}`);
                const producto = val.data;
                return producto.price;
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
                    for (const producto of ecom.products){
                        const precio = await precioProducto(producto.productId);
                        subtotal += (Math.round(precio*producto.quantity)*100)/100;
                    }
                    totalIngresos += subtotal;
                }
                setTotalIngresos(totalIngresos);
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
        </h2>
    </div>
  );
};

export default TotalIngresos
