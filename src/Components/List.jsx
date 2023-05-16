export default function List({ Acounts }) {

    return (
        <div className="card m-5">
            <h5 className="card-header color-yellow">Acounts</h5>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        colors ? colors.map(c => (
                        <li key={c.id} className="list-group-item">
                            <div ></div>
                        </li>)) : '...loading'
                    }
                </ul>
            </div>
        </div>
    )
}