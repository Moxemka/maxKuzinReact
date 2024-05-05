import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from "@mui/material/CssBaseline";
import './App.css'
import MeMain from './me/MeMAin'
import { Box, Paper, ThemeProvider, Typography, createTheme, useMediaQuery, useTheme } from '@mui/material'
import TopMenue from './TopMenue/TopMenue'
import PaperMd3 from './styledComponents/PaperMd3'
import WhoAmI from './whoami/WhoAmI'
import MyExperience from './experience/MyExperience'
import WhyMeMain from './WhyMe/WhyMeMAin';
import Price from './Price/Price';
import Footer from './footer/Footer';

function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const darkTheme = createTheme({
    palette: {
            mode: theme ? theme : 'light' 
        },
    }, [theme]);
    useEffect(() => {
      setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

      const handleStorageChange = (e) => setTheme(e.detail?.theme)
      window.addEventListener("onThemeChange", handleStorageChange)

    }, [])

  return (
    <ThemeProvider theme={darkTheme}>
        <TopMenue
          isMobile={isMobile}
        />
          <MeMain
            isMobile={isMobile}
          />
        <PaperMd3>
          <Header id="whoami" isMobile={isMobile}>
            Кто я?
          </Header>
          <WhoAmI
            isMobile={isMobile}
          />
        </PaperMd3>
        <Box>
          <Box id="portf">
            <Header id="portf" sx={{color: '#fff', mt: '10px', mb: '10px'}} isMobile={isMobile}>
              Портфолио
            </Header>
            <MyExperience/>
          </Box>
        </Box>
        <PaperMd3
          sx={{
            pb: '40px'
          }}
        >
          <Box id="WhyMe">
            <Header sx={{mt: '10px', mb: '10px'}} isMobile={isMobile}>
              Почему я?
            </Header>
            <WhyMeMain
              isMobile={isMobile}
            />
          </Box>
        </PaperMd3>
        <Box id="Price">
          <Header id="Price" sx={{mt: '10px', mb: '10px', color: '#fff'}} isMobile={isMobile}>
              Цены
          </Header>
          <Price
            isMobile={isMobile}
          />
        </Box>
        <Box id="contacts">
          <Footer
            isMobile={isMobile}
          />
        </Box>
    </ThemeProvider>
  )
}


export function Header({children, id, isMobile, sx}) {
  return(
    <Typography id="whoami" variant="h2"  sx={{textAlign: 'left', fontSize: isMobile ? '3.5rem' : '10rem', ml: '2rem', color: sx?.color ? sx?.color : 'text.primary', fontWeight: 'bold', ...sx}}>
      {children}
    </Typography>
  )
}

export default App
