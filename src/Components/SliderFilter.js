import React from 'react';
import { Grid, Slider, Typography } from '@mui/material';
const SliderFilter = ({ value, changedPrice }) => {
    // const classes = useStyles();

    return (
        <div>
            <Slider
                value={value}
                onChange={changedPrice}
                valueLabelDisplay='on'
                min={1000}
                max={5000}

            />
        </div>
    );
};

export default SliderFilter;