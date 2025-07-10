
import ProductItem from "./components/product-item"



const dummyProductData = ['Product1' , 'Product2' , 'Product3' , 'Product4']

function ProductList(){
    return(
        <>
        <h3>ECommerce Project</h3>
        {/* <ProductItem/> */}
        {/* JSX with dynamic value */}
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