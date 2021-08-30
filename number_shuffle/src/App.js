import Board from './components/Board';
import styled from 'styled-components';

const Main = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  `;
function App() {
 
  return (
    <Main>
      <Board></Board>
    </Main>
  );
}

export default App;
