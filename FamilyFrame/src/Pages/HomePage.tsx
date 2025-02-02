import { Link } from 'react-router-dom';
import AboutYou from './AboutYou';  

function HomePage(){
    return (
        <div>
             <Link to="AboutYou" className = "button"> Go To About You </Link>
        </div>
    )
}

export default HomePage;