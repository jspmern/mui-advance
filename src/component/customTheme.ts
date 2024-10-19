import { colors, createTheme } from "@mui/material";

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: colors.yellow[700]
//         },
//         secondary: {
//             //main is not optional means you have to mention main else you are getting error after that a/c to main everything is calculated 
//             main: "#ff4081"
//         },
//         background: {
//             default: '#f5f5f5'
//         }
//     },
//     typography: {
//         fontFamily: "Arial",
//         h1: {
//             fontSize: '3.5rem',
//             fontWeight: 700
//         },
//         h2: {
//             fontSize: "2rem"
//         },

//     },
//     spacing: 8,  // Default spacing of 8px (padding, margin, etc.)
// })
// Extend the palette types to include custom colors
declare module '@mui/material/styles' {
    interface Palette {
        utsavColor: Palette['primary'];
    }
    interface PaletteOptions {
        utsavColor?: PaletteOptions['primary'];
    }
}
const theme = createTheme({
    palette: {
        primary: {
            main: '#6200ea',  // Custom purple color
        },
        secondary: {
            main: '#03dac6',  // Custom teal color
        },
        utsavColor: {
            main: colors.orange[700]
        }

    },
    typography: {
        h1: {
            fontSize: '5.4rem',
            '@media (min-width:600px)': {
                fontSize: '2.4rem',  // Responsive font size for larger screens
            },
        },
        button: {
            textTransform: 'none',  // Disable uppercase text transformation for buttons
        },
    },
    //shadows: ['none','0px 4px 6px rgba(0,0,0,0.1)'],  // Custom shadows
    breakpoints: {
        //here i changed the values
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },

})
export default theme;