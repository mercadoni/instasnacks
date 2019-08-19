import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {setState} from "../actions/actions";
import {URL} from "../constants";
import ProductsUI from "./ProductsUI"
import Loader from "./Loader";

export default function Products() {
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
            dispatch(setState("products", data.retailer.products));
          });
        //throw new Error;
      }
      catch (e) {
        setLoading(false);
        //TODO make error alert
      }
    }
    getData()
  }, [flagFetch, dispatch]);

  return loading ?
      <Loader/>
    :
      <ProductsUI products={products}/>

}