import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css"

export const ProductPage = () => {
    const [product, setProduct] = useState(null);
    let {id} = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
        console.log(product)
    }, [])

    if (product !== null) {
        return (
            <>
            <div >
            <div className="product-container">
                <img src={product.image} alt="product"></img>
                <div className="product__order">
                    <h2>{product.name}</h2>
                    <button onClick={() => alert('Vložit do košíku?')} className="btn">Objednat</button>
                </div>
                
            </div>
            </div>
            </>
        )
    }
   
}