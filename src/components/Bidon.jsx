import fetchOrUpdateUsers from "../services/services";
import { useEffect } from "react";
import { useStore } from "react-redux";


export default function Bidon() {
    const store = useStore()
    useEffect(() => {
      fetchOrUpdateUsers(store)
    }, [store])

    return <div>un élément react</div>
}
