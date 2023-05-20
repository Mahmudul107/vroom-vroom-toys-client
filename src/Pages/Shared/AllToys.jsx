import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysTable from './ToysTable/ToysTable';

const AllToys = () => {
    const toys = useLoaderData()


    return (
        <div>
            <h3>All Toys Page</h3>
            {
                toys.map(toy => <ToysTable
                    key={toy._id}
                    toy={toy}
                />)
            }
        </div>
    );
};

export default AllToys;