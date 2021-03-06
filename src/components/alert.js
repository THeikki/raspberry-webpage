const Alert = ({ onDelete, alert }) => {

    return (
        <div className="alertComponent">
            <table className="innerAlert">
                <thead>
                    <tr>
                        <th> Päivämäärä </th>
                    </tr>   
                </thead>
                <tbody>
                    <tr>
                        <td> { alert.date } </td>
                    </tr>  
                </tbody>
                <thead>
                    <tr>
                        <th> Viesti </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> { alert.alertMessage } </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                    <th> Kuva </th>
                    </tr> 
                </thead>
                    
            </table>  
            <div className="picture">
                <img className="picture" src={`data:image/jpg;base64,${alert.picture}`} alt=""/>
            </div>  
            <button className="deleteButton" onClick={() => onDelete(alert._id)}> Poista </button>
        </div>
    )

}

export default Alert