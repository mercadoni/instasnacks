import React, {useState, useEffect} from "react"
import {useDispatch} from "react-redux";
import {sortLowToHigh, sortHighToLow} from "../../actions/actions";
import "../../styles/app.scss"

export default function Filters () {
  const [sort, setSort] = useState("default");

  const dispatch = useDispatch();

  useEffect(()=>{
    if(sort === "ascendant")
      dispatch(sortLowToHigh());
    if(sort === "descendant")
      dispatch(sortHighToLow());
  }, [dispatch, sort]);

  return(

      <div className="w-100 d-flex mt-2">
          <select className="form-control w-auto ml-auto" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="default" disabled>--Sort--</option>
            <option value="ascendant">Sort by price low to high</option>
            <option value="descendant">Sort by price high to low</option>
          </select>
      </div>

  )
}