import "./App.css";
import ShowCase from "./components/ShowCase";
import { MainBody, Container } from "./styles/Global.styled";
import { theme } from "./utils/Them";
import { ThemeProvider } from "styled-components";
import MySkills from "../src/components/MySkils.styled";
import MyProject from "../src/components/MyProject";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <Container>
          <ShowCase />
          <MySkills />
          <MyProject />
          <Footer />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
