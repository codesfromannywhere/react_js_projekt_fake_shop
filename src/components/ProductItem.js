import { Link } from "react-router-dom";

const ProductItem = (props) => {
    return (<div className="products-info">
        <img src={props.image} alt="productimage" />
        <h4>{props.title}</h4>
        <p>$ {props.price}</p>
        <Link to={`/${props.id}`}>more Details</Link>

    </div>);
}

export default ProductItem;