import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
    return <header>
        <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/">login</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/posts">Posts</Link></li>
        </ul>
    </header>
}