import {
    useParams,
} from "react-router-dom";
const Productpage = () => {
    let {id} = useParams();
    return (
        <div>
            <h1>THis is Product Page</h1>
            <h3>Product ID is: {id}</h3>
        </div>
    )
}

export default Productpage
