export default function List({ account }) {

    return (
        <div className="card m-5">
            <h5 className="card-header">Accounts</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        account
                            ? account.length
                                ? account.map(a => (
                                    <li key={a.id} className="list-group-item">
                                        <div className="account-card">Account owner</div>
                                        <button className="btn">Delete</button>
                                    </li>))
                                : 'No accounts yet'
                            : '...loading'
                    }
                </ul>
            </div>
        </div>
    )
}