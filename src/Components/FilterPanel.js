import React, { useEffect } from 'react'
import { categoryList, ratingList } from './Constants'
import FilterListToggle from './FilterListToggle'
import '../styles/about.css'
import CheckboxFilter from './CheckboxFilter'
import SliderFilter from './SliderFilter'
import FilterRating from './FilterRating'

const FilterPanel = ({ selectedcategory, selectToggle, selectedRating, selectRating, cuisines, changeChecked, changedPrice, selectedPrice }) => {



    return (
        <div className='FilterPaneltext'>
            <div className="FilterPanel">FilterPanel</div>

            {/* filter by category */}
            <div className="inputgroup">
                <FilterListToggle
                    options={categoryList}
                    value={selectedcategory}
                    selectToggle={selectToggle}
                />
            </div>

            {/* filter by cuisines */}
            {/* <div className="inputgroup">
                <div className="label">Cuisines</div>
                {cuisines.map(cuisines => <CheckboxFilter
                    key={cuisines.id}
                    label={cuisines.label}
                    checked={cuisines.checked}
                    cuisines={cuisines}
                    changeChecked={changeChecked}
                />
                )}
            </div> */}

            {/* filter by price */}
            <div className="inputgroup">
                <div className="label mt-4 mb-5 pricefilter">Filter by Price</div>
                <SliderFilter
                    value={selectedPrice}
                    changedPrice={changedPrice}
                />
            </div>



            {/* filter by rating */}
            <div className="inputgroup mb-5 ">
                <div className="label">Star Rating</div>
                <FilterRating
                    options={ratingList}
                    value={selectedRating}
                    selectRating={selectRating}
                />
            </div>
        </div>
    )
}

export default FilterPanel
