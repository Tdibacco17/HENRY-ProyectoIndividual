import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LandingPageContainer from './containers/LandingPageContainer/LandingPageContainer';
import DetailContainer from './containers/DetailContainer/DetailContainer';
import DogCreateContainer from './containers/DogCreateContainer/DogCreateContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={LandingPageContainer} />
        <Route exact path='/home' component={HomeContainer} />
        <Route exact path='/dogs' component={DogCreateContainer} />
        <Route exact path='/dogs/:id' component={DetailContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
