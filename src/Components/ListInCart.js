import React, { useEffect, useState } from "react";
import produce from "./Produce";
import ProduceForm from "./ProduceForm";

function ShoppingList(){
    const[produce,setProduce] = useState([]);
}
useEffect(() => {
    fetch(' http://localhost:3000/produce')
    .then((r) => r.json())
    .then((produce) => setProduce(produce));
}, []);












export default ShoppingList;