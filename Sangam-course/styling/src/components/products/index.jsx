
import ProductItem from "./components/product-item"



const dummyProductData = ['Product1' , 'Product2' , 'Product3' , 'Product4']

function ProductList(props){
    const {name , city} = props;
    return(
        <>
        <h3>ECommerce Project</h3>
        {/* <ProductItem/> */}
        {/* JSX with dynamic value */}
        <h4>My name is {name}</h4>
        <ul>
            {
                dummyProductData.map((item , index) =>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
        </>
    )
}

export default ProductList