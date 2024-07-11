import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

 let [searchParams, setSearchParams] = useSearchParams({page:'1'})


    return (
        <div>
            <button onClick={() => {
                let page = +(searchParams.get('page')||'1');
                let prevPage = page - 1;
                setSearchParams({page: prevPage.toString()})
            }}>prev</button>
            <button onClick={() => {
                let page = +(searchParams.get('page')||'1');
                         let nextPage = page + 1;
                setSearchParams({page: nextPage.toString()})

            }}>next</button>
        </div>
    );
};

export default PaginationComponent;