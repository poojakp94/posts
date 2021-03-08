import styled from 'styled-components';
import Home from'./Pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Loader from './Components/Loader/Loader'
import Navbar from './Components/Navbar/Navbar';
import Like from './Pages/Like';
import Dislike from './Pages/Dislike'
import Readmore from './Pages/Readmore';
import CreatePost from './Pages/CreatePost'
import Edit from './Pages/Edit'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* {isLoading ? <div style={{display: "flex", flex: "1", justifyContent: "center", alignItems: "center"}}><Loader /></div> :  */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/likes" exact component={Like} />
          <Route path="/dislikes" exact component={Dislike} />
          <Route path="/description/:id" component={Readmore} exact/>
          <Route path="/edit/:id" component={Edit} exact/>
          <Route path="/create" component={CreatePost} exact/>
          {/* <Route component={PageNotFound} /> */}
        </Switch>
     
    {/* } */}
      </Router>
     
    </>
  );
}

export default App;
