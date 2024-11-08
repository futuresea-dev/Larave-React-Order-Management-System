import React, {useState} from 'react';

import ProductItem from './ProductItem';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import '../products/style.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const TheProducts = () => {
    const products = useSelector((state) => state.products.products);
    const itemsPerPage = 5;
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
    return (
        <div>
            <div className="flex items-center mx-4 my-8 p-8 bg-white shadow-2xl drop-shadow-md">
                <span className="text-4xl text-primary mr-6">
                    <AiOutlineUnorderedList/>
                </span>
                <h2 className="uppercase text-4xl tracking-widest font-semibold">
                    The Orders
                </h2>
            </div>
            <div className='bg-white mx-4 p-8 shadow-lg space-y-12'>
                {currentItems.map((product) => {
                    return <ProductItem key={product.id} product={product} update={false}/>
                })}

            </div>
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
        </div>
    );
};


export default TheProducts;