import React from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButton } from '@mui/material';


const FilterRating = ({ options, value, selectRating }) => {

    return (
        <div>
            <ToggleButtonGroup
                value={value}
                onChange={selectRating}
                exclusive
            >
                {options.map(({ label, id, value }) => (
                    <ToggleButton className='mx-1 mb-4' key={id} value={value}>
                        {label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export default FilterRating
