import './index.css';
import Login from './components/login';
import Alerts from './components/alerts';
import Loading from './components/loading';
import { useState } from 'react'
import axios from 'axios';

function App() {

  const [alerts, setAlerts] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  
  const getAlerts = () => {
    setShowLogin(false)
    setShowLoading(true)
    
    axios.get("https://raspberry-api.herokuapp.com/api/alerts")
    .then(res => {
      
      setAlerts(res.data)

      console.log(res.data)
      setShowLoading(false)
      setShowAlert(true)
    })
    .catch(error => {
      var alertMessage = JSON.stringify(error.response.data.message)
      alert(alertMessage)
      console.log(error)
    })
  }

  const logout = () => {
    setShowAlert(false)
    setShowLoading(false)
    setShowLogin(true)
    console.log("KIRJAUDUIT ULOS")
  }
  
  const deleteAlert = (id) => {
    axios.delete("https://raspberry-api.herokuapp.com/api/alerts/" + id)
    .then(res => {
      console.log(res.data.message)
      getAlerts()

    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="App">
      {showLogin ? <Login onPress={getAlerts}/> : null}
      {showAlert ? <Alerts updateClick={getAlerts} handleClick={logout} alerts={alerts} onDelete={deleteAlert}/> : null}
      {showLoading ? <Loading/> : null}
    </div>
  );
}

export default App;
