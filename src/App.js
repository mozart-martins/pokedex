import { PokemonProvider } from './Components/Context/Context';
import Navbar from './Components/Layout/Navbar'
import Section from './Components/Layout/Section'

function App() {
  return (
    <PokemonProvider>
      <Navbar />
      <Section />
    </PokemonProvider>
  );
}

export default App;
