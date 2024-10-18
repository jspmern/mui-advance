import { Button, Typography } from '@mui/material'
import React from 'react'

function CustomThemeComp() {
    return (
        <>
            <Typography variant='h1' gutterBottom>Hello,how are you</Typography>
            <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <br />
            <Button variant="outlined" color="secondary">
                Secondary Button
            </Button>

        </>
    )
}

export default CustomThemeComp