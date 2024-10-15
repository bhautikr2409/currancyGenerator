import { useState } from "react"
import { useEffect } from "react"

const UseCurrencyInfo = (currency) => {

  const [data,setData] = useState({})

  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
  },[currency])
  console.log("data",data)
  console.log("currency",currency)
   return data
}


export default UseCurrencyInfo  