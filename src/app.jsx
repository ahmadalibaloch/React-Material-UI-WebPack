import React from 'react';
import Button from 'material-ui/Button';
import AppLayout from './components/appbar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {

  render() {
    const Topics = ({ match }) => (
     "hi"
    );
    return (
      <div>
        <Router>
          <AppLayout>
            {/* Content goes here */}
            <div>
              <Button>Signup!</Button>
            </div>
            Hey React Do! really. Yeah! hhhhh helo
          <Route path="/topics" component={Topics} />
          </AppLayout>
        </Router>
      </div>
    );
  }
}

export default App;