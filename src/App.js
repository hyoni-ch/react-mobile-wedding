import "./App.css";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { MainBox } from "./components/styles";

function App() {
  return (
    <div className="App">
      <MainBox className="flex box-sizing">
        <Layout />
        <Footer />
      </MainBox>
    </div>
  );
}

export default App;
