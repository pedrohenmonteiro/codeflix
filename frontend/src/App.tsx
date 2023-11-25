import { Box, ThemeProvider, createTheme } from "@mui/system"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"

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
        <Layout>Ola mundo</Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
