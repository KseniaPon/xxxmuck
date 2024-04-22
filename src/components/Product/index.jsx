import './index.css'

export const Product = (props) => {
    const {product, onSelect} = props;
    const handleClick = () => {
    onSelect(product.id)
    }
    return (
    <div className="product">     
            
    <img className='picture-main' onClick={handleClick} src={product.image} alt="product" loading="lazy"></img>
    <h2 className="product__name">{product.name}</h2>
            
    </div>
    )
}

