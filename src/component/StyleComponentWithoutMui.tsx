
import { styled } from '@mui/material'
import React from 'react'

// 👉  note point if you have normal tag like (p,button) that you have to pass in string else material ui component with quote

function StyleComponent() {
    {/* //exp1. example of custom div */ }
    let CustomDiv = styled('div')({
        backgroundColor: "orange",
        color: "black",
        padding: "12px",
        border: "2px solid black"
    })
    //exp2.he styled API allows access to the MUI theme, which can be used to apply styles based on the theme's design tokens (colors, typography, spacing, etc.).
    //1.way to writing
    let CustomThemeButton = styled('button')(({ theme }) => {
        //1.you can write javascript here
        return {
            color: theme.palette.error.main,
            fontSize: '18px',
            backgroundColor: theme.palette.secondary.light,
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
            '&:hover': {
                backgroundColor: theme.palette.primary.dark,
            }
        }
    }
    )

    //exp3.Using Props for Dynamic Styling
    //2nd way to writing without return keyword check on CustomThemeButton
    let CustomDynamicButton = styled('button')(({ theme, color }) => ({
        color: color ? color : theme.palette.primary.dark,
        fontSize: "2rem",
        backgroundColor: color ? theme.palette.secondary.light : theme.palette.error.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        }

    }))

    //exp4.Combining Multiple Components

    const Wrapper = styled('div')({
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    });

    const CustomButton = styled('button')({
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'darkblue',
        },
    });

    const CustomText = styled('p')({

        margin: '0 10px',
        color: 'gray',
    });
    return (
        <>

            <CustomDiv >Hello how are you</CustomDiv>
            <br />
            <br />
            <CustomThemeButton>click here</CustomThemeButton>
            <br />
            <br />
            <CustomDynamicButton color="green">customdesignwithprops</CustomDynamicButton>
            <br />
            <br />
            <CustomDynamicButton>customdesignwithoutprops</CustomDynamicButton>
            <br />
            <br />
            <Wrapper>
                <CustomText>This is a text next to the button</CustomText>
                <CustomButton>Click Me</CustomButton>
            </Wrapper>

        </>
    )
}

export default StyleComponent