// Reuseable form component w/ MUI textField

import React from "react"
import {Grid, MenuItem, TextField} from "@material-ui/core";

export const TextFormField = props => {
    // since there will be no state stored in redux (as of yet) - i will not have a change handler or value
    return (
        <Grid item xs={props.xs} sm={props.sm}>
            <TextField
                fullWidth
                hiddenLabel={props.hiddenLabel}
                select={props.select}
                multiline={props.multiline}
                rows={props.rows}
                variant={props.variant}
                label={props.label}
                type={props.type}
                name={props.name}
                placeholder={props.label}
                InputLabelProps={props.inputLabel}
            >
                {props.data.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Grid>
    )}
    ;