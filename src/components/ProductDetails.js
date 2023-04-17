import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
    const productsParams = useParams([])
    const [products, setProducts] = useState([])
    // console.log(productsParams);
    // console.log(products);
    // console.log(products[productsParams.details]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
            })
    }, [])

    // Hier filter anwenden um IDs zu vergleichen um nur 1!! Produktdetail auszugeben
    const detailItem = products.filter((elt) => {
        return elt.id.toString() === productsParams.details;
    })
    // console.log(productsParams.details);
    console.log(detailItem);
    return (
        <section>
            <Link to='/'>Back to all products</Link>
            {detailItem.map((elt, i) => {
                return (
                    <div key={i} className="detail-info">
                        <p>Category: {elt.category}</p>
                        <img src={elt.image} alt="" />
                        <h3>{elt.title}</h3>
                        <div>
                            <p>$ {elt.price}</p>
                            <p>Rating: {elt.rating.rate}</p>
                        </div>

                        <p>{elt.description}</p>
                    </div>
                )
            })}
            {/* <p>{products[productsParams.details].category}</p>
            <img src={products[productsParams.details].image} alt="" />
            <p>${products[productsParams.details].price}</p>
            <h3>{products[productsParams.details].title}</h3>
            <p>{products[productsParams.details].description}</p>
            <p>{products[productsParams.details].rating[1]}</p> */}

        </section>
    );
}

export default ProductDetails;