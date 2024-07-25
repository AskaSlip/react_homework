import React from 'react';
import {Link} from "react-router-dom";
import styles from './MainComponent.module.css'

const MainComponent = () => {
    return (
        <div className={styles.wrapper}>

                <span><Link to={''} className={styles.links}>home page</Link></span>
                <span><Link to={'users'} className={styles.links}>users page</Link></span>
                <span><Link to={'posts'} className={styles.links}>posts page</Link></span>
                <span><Link to={'comments'} className={styles.links}>comments page</Link></span>
                <span><Link to={'todos'} className={styles.links}>todos page</Link></span>
        </div>
    );
};

export default MainComponent;