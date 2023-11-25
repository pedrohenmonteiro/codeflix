import { Box, ThemeProvider, createTheme } from "@mui/system"
import { Header } from "./components/Header"

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <Header />
      </Box>
    </ThemeProvider>
  )
}

export default App
