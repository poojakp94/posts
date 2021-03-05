import styled from 'styled-components';
import Home from'./Pages/Home';

const AppContainer = styled.div`
  border: 1px solid palevioletred;
`

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
