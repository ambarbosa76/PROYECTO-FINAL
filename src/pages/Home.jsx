import { ProductList } from "../components/ProductList"

export const Home = ({ allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts,  }) => {

  return (
    <div>
        <ProductList 
            allProducts= {allProducts} 
            setAllProducts= {setAllProducts}
            countProducts={countProducts}
            setCountProducts= {setCountProducts}
            total= {total}
            setTotal= {setTotal}
    />
   
    </div>
  )
}