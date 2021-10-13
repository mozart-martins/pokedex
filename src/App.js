import { PokemonProvider } from './Components/Context/Context'
import PokemonItemDetail from './Components/Pokemon/PokemonItemDetail'
import Navbar from './Components/Layout/Navbar'
import Section from './Components/Layout/Section'
import Footer from './Components/Layout/Footer'
import About from './Components/Layout/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/page/:page" component={Section}/>
          <Route path="/detail/:id" component={PokemonItemDetail}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
