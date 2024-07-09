import React from 'react';
import {Link} from "react-router-dom";

const MainComponent = () => {
    return (
        <div>

                <span><Link to={''}>Home Page  </Link></span>
                <span><Link to={'users'}>Users Page  </Link></span>
                <span><Link to={'posts'}>Posts Page  </Link></span>
                <span><Link to={'comments'}>Comments Page  </Link></span>
                <span><Link to={'error'}>Error Page</Link></span>
            
        </div>
    );
};

export default MainComponent;