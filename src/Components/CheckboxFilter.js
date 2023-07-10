import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material'


const CheckboxFilter = ({ changeChecked, cuisine, id, label, checked }) => {
    //   const { checked, label, id } = cuisine;
    return (
        <div>
            <FormControlLabel

                control={
                    <Checkbox
                        // classes={{
                        //   checked: classes.checked,
                        //   root: classes.root,
                        // }}
                        size='small'
                        value={checked}
                        onChange={() => changeChecked(id)}
                        inputProps={{ 'aria-label': 'checkbox with small size' }}
                    />
                }
                label={label}
            />
        </div>
    );
};

export default CheckboxFilter;