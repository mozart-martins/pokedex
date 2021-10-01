import { PokemonProvider } from './Components/Context/Context'
import PokemonItemDetail from './Components/Pokemon/PokemonItemDetail'
import Navbar from './Components/Layout/Navbar'
import Section from './Components/Layout/Section'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Section} />
          <Route path="/detail/:id" component={PokemonItemDetail} />
        </Switch>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
