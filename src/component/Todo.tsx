import { Box, colors, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import './Todo.css'


let useStyles = makeStyles(
    {
        customTypography: {
            color: colors.blue[900],
            fontSize: "28px",
            "&:hover": {
                backgroundColor: 'green', // Change background color on hover
                color: 'yellow',
            }
        }
    }
)
function Todo() {
    //there is some way to do style in material ui
    //1. direct styling
    //2.by className
    //3.override className
    //4.by using makeStyle
    //5.by using sx
    //6.by using style function
    //7.custom theme

    //for this one you have to install   :--- npm install @mui/styles

    const classes = useStyles();
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

            {/* //2.example of by using our own class */}

            <Box>
                <Typography variant="h1" className="heading"> how are you ,i am fine</Typography>
            </Box>

            {/* //3.example of by using overrideclass className
            //but in this case we are facing one issue everywhere i have to write !important so, for soliving this issue we hvae makeStyle api
            //a.with override using !important */}
            <Box>
                <Typography color='primary' variant="h2">hello i am ovride class example</Typography>
            </Box>
            {/* //b.without using !important by using makeStyle */}
            <Box>
                <Typography color='primary' variant="h3" className={classes.customTypography}>hello i am ovride class example</Typography>
            </Box>

            {/* //4.ways to use sx */}
            <Box>
                <Typography gutterBottom sx={{
                    color: colors.green[700],
                    textAlign: 'center',
                    '&:hover': {
                        background: 'blue',
                        border: "2px solid black",
                        color: 'white'
                    }
                }}>hello i am sx ways to apply css </Typography>
            </Box>

            {/* //5.by using style function it s most common and famous way  */}
            {/* ↪  go to styleComp component */}

            {/* //6.for custom theme goto the  */}

        </>
    )
}

export default Todo