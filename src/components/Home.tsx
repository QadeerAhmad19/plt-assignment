import * as React from "react";
import { Dispatch } from "redux";
import Loader from "./Loader";
import Product from "./Product";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setProducts, filterProducts } from "../store/actionCreators";
import ProductDataService from "../services/productService";

const Home: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [selectedColor, setColor] = React.useState("default");
    const [colors, setColors] = React.useState<any>()
    const dispatch: Dispatch = useDispatch();
    const products: IProduct[] = useSelector(
        (state: CartState) => state.items,
        shallowEqual
      );
      const selectChange = (event: React.ChangeEvent<HTMLSelectElement>): void =>  {
        const value = event.target.value;
        setLoading(true);
        setColor(value);
        dispatch(filterProducts(value));
      };  
      React.useEffect(() => {
        setLoading(true);
        ProductDataService.getAll()
          .then(response => {
            console.log(response);
            dispatch(setProducts(response.data))
            // Note: Filterout valid colors from product service. 
            // This should have seperate service e.g getProductAttributes
            const uniqueColors = Array.from(new Set(response.data.map((a: IProduct) => a.colour)));
            setColors(uniqueColors);
          })
          .catch(err => {
            console.log(err);
            setLoading(false);
          });
      }, []);

      React.useEffect(() => {
        setLoading(false);
      },[products])
  
    return (
        <div className="container">
          { !loading && <div className="input-field col-2 s12">
            <select 
              className="color-select"
              defaultValue={selectedColor} 
              onChange={selectChange} 
            >
            <option disabled value="default">
                Choose Color
              </option>
              <option value="show-all">
                Show All
              </option>
              { colors && colors.map((m: string, index: number) => {
                return (
                  <option value={m} key={index}>{m}</option>    
                )
              }) }
            </select>
          </div>}
                <div className="box">
                  { !loading && products.map((item: IProduct, index: number)=>{
                    return (
                      <Product {...item} key={index}/>
                    )
                  })}
                  { loading && <Loader modal="Products" />}
                </div>
            </div>
    )
};
export default Home;