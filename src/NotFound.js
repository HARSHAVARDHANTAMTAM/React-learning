import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>page cannot be found</p>
            <Link to = '/'>Back to the home page... </Link>
        </div>
     );
}
 
export default NotFound;