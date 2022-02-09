import { RecoilRoot } from 'recoil'
import Container from './components/Container'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecoilRoot>
          <Container />
        </RecoilRoot>
      </header>
    </div>
  );
}

export default App
