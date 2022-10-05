import React, { useEffect, useState } from "react";
import produce from "./Produce";
import ProduceForm from "./ProduceForm";

function ListInCart(){
    const[produce,setProduce] = useState([]);
}
useEffect(() => {
    fetch(' http://localhost:3000/produce')
    .then((r) => r.json())
    .then((produce) => setProduce(produce));
}, []);



return (
    <div>
        <Produce produce={produce} />
        <ProduceForm />
    </div>
)








export default ListInCart   ;