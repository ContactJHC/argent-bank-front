import fetchOrUpdateUsers from "../services/services";
import { useEffect } from "react";
import { useStore } from "react-redux";


export default function Bidon() {
    const store = useStore()
    useEffect(() => {
      fetchOrUpdateUsers(store)
    }, [store])

    return <div style={{backgroundColor:"lightgoldenrodyellow", height:"400px", margin:"auto", textAlign:"center", paddingTop:"100px"}}>un élément react</div>
}
