import { useEffect, useState } from "react";
import { Product } from "../Product";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import './index.css'

export const ProductPicker = () => {
  const navigate = useNavigate(); 

  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
        const data = await response.json();
        setProducts(data);
    }

    fetchProduct();
    
}, [])

  const selectHandler = (id) => {
    setSelectedId(id)
    navigate(`/product/${id}`);
    

  }

// console.log(products)
   
        return (
            <>
              <div className='title-box'>
                <h1>Aktuální nabídka</h1>
                <div className='text-box'>
                    <p>Nejnovější prémiové produkty od předních českých designerů.</p>
                    <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
                </div>
              </div>
              
              <div className="products__container">
                {products.map(p => <Product key={p.id} product={p} onSelect={selectHandler}/>)}
              </div>
           
            </>
            
            
        )
    }