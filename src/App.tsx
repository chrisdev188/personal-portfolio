import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
