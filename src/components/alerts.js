import Alert from "./alert";

const Alerts = ({ alerts, onDelete, handleClick, updateClick }) => {

    if(alerts.length === 0) {
        return (
            <div>
                <button className="updateButton" onClick={updateClick}>Päivitä</button>
                <button className="logoutButton" onClick={handleClick}>Kirjaudu ulos</button>
                <hr className="hr"></hr>
                <div className="noAlertComponent">
                    <p>Ei hälytyksiä</p>

                </div>
                
            </div>
        )
    }

    return (
        <>
            <button className="updateButton" onClick={updateClick}>Päivitä</button>
            <button className="logoutButton" onClick={handleClick}>Kirjaudu ulos</button>
            <hr className="hr"></hr>
            {alerts.map(alert => <Alert key={alert._id} alert={alert} onDelete={onDelete} />)}
        </>
    )
}

export default Alerts