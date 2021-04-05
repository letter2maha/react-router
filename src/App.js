import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Orgs from './components/Orgs/Orgs'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Peoples from './components/Peoples/Peoples'
import { useState } from 'react'
function App() {
  const [orgId, setOrgId] = useState('')
  const noMatch = () => {
    return <h1>404 Page Not Found</h1>
  }
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' render={() => <Orgs setOrgId={setOrgId} />} />
          <Route path='/getPeopleByOrgId/:id' component={Peoples} />
          <Route component={noMatch} />
        </Switch>
        {/* <Orgs /> */}
      </Router>
    </div>
  )
}

export default App
