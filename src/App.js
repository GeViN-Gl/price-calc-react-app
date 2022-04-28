import "./App.scss";
import CalcMainPage from "./pages/calc-main/calc-main.component";

import styled from "styled-components";

const Text = styled.div`
color
`;

function App() {
  return (
    <div className="App">
      <CalcMainPage />
    </div>
  );
}

export default App;
