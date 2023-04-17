import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
            })
    }, [])

    return (<section className="products-grid">
        {products.map((productitem, i) => {
            return (
                <ProductItem
                    key={i}
                    title={productitem.title}
                    image={productitem.image}
                    price={productitem.price}
                    id={productitem.id}
                />
            )
        })}

    </section>);
}

export default ProductList;