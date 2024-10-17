import { Box, Typography } from "@mui/material"

function Todo() {
    //there is some way to do style in material ui
    //1. direct styling
    //2.by className
    //3.override className
    //4.by using sx
    //5.by using style function
    //6.custom theme
    return (

        <>
            {/* 1.//example of direct styling */}
            <Box
                height={300}
                width={400}
                bgcolor={'grey'}
            >
                <Typography
                    variant='subtitle2'
                    color='error.light'
                    textAlign={'end'}
                    gutterBottom
                >
                    this is example of the direct styling by attribute that's material ui offer us
                </Typography>
            </Box>

            //2.example of
        </>
    )
}

export default Todo