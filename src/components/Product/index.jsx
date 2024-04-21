import './index.css'

export const Product = ({product}) => {
//      const handleClick = () => {
//      onSelect(product.id)
// }
    return (
    <div className="product">     
            
    <img className='picture-main' onClick={() => alert("I wanna buy this")} src={product.image} alt="product" ></img>
    <h2 className="product__name">{product.name}</h2>
            
    </div>
    )
}