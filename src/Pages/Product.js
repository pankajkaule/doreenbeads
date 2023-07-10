import React, { useCallback, useEffect, useState } from 'react';
// import SearchBar from './SearchBar';
import FilterPanel from '../Components/FilterPanel';
import List from '../Components/List';
import '../styles/about.css'
import { dataList } from '../Components/Constants';
// import { Category } from '@mui/icons-material';


const Product = () => {

    const [selectedcategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [cuisines, setCuisines] = useState([{ id: 1, checked: false, label: 'American' }, { id: 2, checked: false, label: 'Chinese' }, { id: 3, checked: false, label: 'Italian' }]);
    const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
    const [list, setList] = useState(dataList);

    const handleselectCategory = useCallback((event, value) => {
        if (!value) {
            return null
        } else {
            return setSelectedCategory(value);
        }
    }, [])

    const handleSelectRating = useCallback((event, value) => {
        if (!value) {
            return null
        } else {
            return setSelectedRating(value);
        }
    }, [])

    const handleChangeChecked = id => {
        const cuisinesStateList = cuisines;
        const changeCheckedCuisines = cuisinesStateList.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
        setCuisines(changeCheckedCuisines)
    }

    const handelChangedPrice = (event, value) => {
        setSelectedPrice(value);
    }


    // filter by rating
    useEffect(() => {
        const applyFilters = () => {
            let updatedList = dataList;

            if (selectedRating) {
                updatedList = updatedList.filter(item => parseInt(item.rating) === parseInt(selectedRating))
            }
            setList(updatedList)
        }
        applyFilters();

    }, [selectedRating])

    // filter by Category
    useEffect(() => {
        const applyFilters = () => {
            let updatedList = dataList;

            if (selectedcategory) {
                updatedList = updatedList.filter(item => item.category === selectedcategory)
            }
            setList(updatedList)
        }
        applyFilters();

    }, [selectedcategory])

    // filter by cuisines

    useEffect(() => {
        const applyFilters = () => {
            let updatedList = dataList;
            const cuisinesChecked = cuisines.filter((item) => item.checked).map(item => item.label.toLowerCase())

            if (cuisinesChecked.length) {
                updatedList = updatedList.filter((item) => cuisinesChecked.includes(item.cuisines));

            }
            setList(updatedList)
        }
        applyFilters();

    }, [cuisines])

    // filter by price 

    useEffect(() => {
        const applyFilters = () => {
            const minPrice = [0];
            const maxPrice = selectedPrice[1];
            let updatedList = dataList;
                const updatedListt = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice)
           
            setList(updatedListt)
        }
        applyFilters();

    }, [selectedPrice])



    return (
        <div className='about'>
            {/* <SearchBar/> */}

            <div className="aboutpanel">
                <div className="filterpanel">
                    <FilterPanel selectToggle={handleselectCategory}
                        selectedcategory={selectedcategory}
                        selectedRating={selectedRating}
                        selectRating={handleSelectRating}
                        cuisines={cuisines}
                        changeChecked={handleChangeChecked}
                        selectedPrice={selectedPrice}
                        changedPrice={handelChangedPrice}
                    />
                </div>
                <div className="listpanel">
                    <List list={list} />
                </div>

            </div>
        </div>
    )
}

export default Product