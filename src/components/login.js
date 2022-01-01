import { useState } from "react"
//testi
const Login = ({ onPress }) => {
    const [user, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const checkIfValid = (e) => {
        e.preventDefault()

        const usernameCorrect = "omistaja"
        const passwordCorrect = "Salasana"

        if(user === usernameCorrect && password === passwordCorrect) {
            console.log("Kirjauduit sisään")
            
            onPress()
        }
        else {
            console.log("Väärät tunnukset")
            setUserName("")
            setPassword("")
            
        }
    }

    return (
        <div className="loginComponent">
            <div>
                <label>Käyttäjänimi</label>
                <br></br>
                <input type ="text" placeholder="Käyttäjänimi" value={user} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
                <label>Salasana</label>
                <br></br>
                <input type ="password" placeholder="Salasana" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="loginButton" onClick={checkIfValid}> Kirjaudu</button>
        </div>
    )

}

export default Login