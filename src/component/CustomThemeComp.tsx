import { Button, Typography } from '@mui/material'
import React from 'react'
import theme from './customTheme'

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
            {/* //custom new color not work directly either you have to pass in sx else style function */}
            <Button
                variant="outlined"
                sx={{
                    color: theme.palette.utsavColor.main,  // Custom text color
                    borderColor: theme.palette.utsavColor.main,  // Custom border color
                    '&:hover': {
                        backgroundColor: theme.palette.utsavColor.light,  // Optional hover color
                        borderColor: theme.palette.utsavColor.light,
                    },
                }}
            >
                Utsav Color Button
            </Button>



        </>
    )
}

export default CustomThemeComp