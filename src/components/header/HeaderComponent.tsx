import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/users'}>to users page</Link></li>
                <li><Link to={'/posts'}>to posts page</Link></li>
                <li><Link to={'/users/sort'}>to sorted users page</Link></li>
                <li><Link to={'/comments'}>to comments page</Link></li>
                <hr/>

            </ul>
            </div>
    );
};

export default HeaderComponent;