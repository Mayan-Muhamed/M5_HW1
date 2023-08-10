import React, {useState} from 'react';
import productsJSON from "../../json/data.json"
import {Link} from 'react-router-dom';

const ProductList = () => {

    const [products] = useState(productsJSON)

    return (
        <div>
            {products.map(e => (
                <ul>
                    <li>
                        <Link to="/detail" state={e}>{e.name}</Link>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default ProductList;