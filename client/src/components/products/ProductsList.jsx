import React from 'react';
import { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import { useSelector } from 'react-redux';
import TheSpinner from '../../layout/TheSpinner';
import ReactPaginate from 'react-paginate';
import './style.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const ProductsList = ({ itemsPerPage }) => {
    const gridView = useSelector((state) => state.ui.gridView);
    const products = useSelector((state) => state.products.filteredProducts);
    const loading = useSelector((state) => state.ui.productsLoading);

    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };


    if (loading) {
        return <TheSpinner />
    } else if (products.length < 1) {
        return (
            <div className='w-full'>
                <p className='mx-auto'>Sorry, no products matched your search.</p>
            </div>
        );
    }


    if(gridView) {
        return (
            <>
                <GridView products={currentItems}/>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 20,
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                    }}
                >
                    <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        activeClassName={'item active '}
                        breakClassName={'item break-me '}
                        breakLabel={'...'}
                        containerClassName={'pagination'}
                        disabledClassName={'disabled-page'}
                        marginPagesDisplayed={2}
                        nextClassName={"item next "}
                        nextLabel={<ArrowForwardIosIcon style={{fontSize: 18, width: 150}}/>}
                        pageCount={pageCount}
                        pageClassName={'item pagination-page '}
                        previousClassName={"item previous"}
                        previousLabel={<ArrowBackIosIcon style={{fontSize: 18, width: 150}}/>}
                    />
                </div>
            </>
        );
    } else {
        return (
            <>
                <ListView products={currentItems}/>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 20,
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                    }}
                >
                    <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        activeClassName={'item active '}
                        breakClassName={'item break-me '}
                        breakLabel={'...'}
                        containerClassName={'pagination'}
                        disabledClassName={'disabled-page'}
                        marginPagesDisplayed={2}
                        nextClassName={"item next "}
                        nextLabel={<ArrowForwardIosIcon style={{fontSize: 18, width: 150}}/>}
                        pageCount={pageCount}
                        pageClassName={'item pagination-page '}
                        previousClassName={"item previous"}
                        previousLabel={<ArrowBackIosIcon style={{fontSize: 18, width: 150}}/>}
                    />
                </div>
            </>
        );
    }
};


export default ProductsList;