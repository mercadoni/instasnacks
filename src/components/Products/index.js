import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {setState} from "../../actions/actions";
import {URL} from "../../constants";
import Products from "./Products"
import Loader from "../Loader";
import Alert from "../Alert";

export default function Index() {
  const [flagFetch] = useState(true);
  const [loading, setLoading] = useState(true);

  const products = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(()=>{
    async function getData (){
      setLoading(true);
      try{
        await fetch(URL)
          .then(response => response.json())
          .then(data => {
            setLoading(false);
            const products_aux = data.retailer.products.filter(product => product.price || product.special_price);
            dispatch(setState("products", products_aux));
          });
      }
      catch (e) {
        setLoading(false);
      }
    }
    getData()
  }, [flagFetch, dispatch]);

  return loading ?
      <Loader/>
    :
      products.length === 0 ?
        <Alert type="danger" txt="Ups, Hubo un problema!"/>
        :
        <Products products={products}/>


}