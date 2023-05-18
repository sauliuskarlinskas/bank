

export default function List({ accounts, setDeleateModalData }) {

    const destroy = a => {
        setDeleateModalData(a);
    }


    return (
        <div className="card m-5">
            <h5 className="card-header">Sąskaitos</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        accounts
                            ? accounts.length
                                ? accounts.map(a => (
                                    <li key={a.id} className="list-group-item">
                                        <div className="account-card">{a.Name}</div>
                                        <div className="account-card">{a.LastName}</div>
                                        <div className="count">{a.Balance}</div>
                                        
                                        <button className="btn-del" onClick={_=> destroy(a)}>Ištrinti sąskaitą</button>
                                        <button className="btn">Pridėti lėšų</button>
                                        <button className="btn-del">Nuskaičiuoti lėšas</button>
                                    </li>))
                                : 'Dar nėra sąskaitų'
                            : '...kraunasi'
                    }
                </ul>
            </div>
        </div>
    )
}