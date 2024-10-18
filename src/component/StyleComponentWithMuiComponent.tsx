import { Button, styled } from '@mui/material'
import React from 'react'

function StyleComponentWithMuiComponent() {
    interface CustomButtonProps {
        age?: number;  // Define 'age' as an optional prop
    }
    let CustomButtom = styled(Button)<CustomButtonProps>(({ theme }) => {
        return {
            color: theme.palette.error.dark,
            //backgroundColor: "blue", //override
            fontSize: "19px",
            "&:hover": {
                color: 'white'
            }
        }
    })
    return (
        <>
            <CustomButtom variant='contained' color='secondary' age={5}>hello</CustomButtom>
        </>
    )
}

export default StyleComponentWithMuiComponent