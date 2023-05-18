import { useState } from "react";

export default function AddMoney () {

    //const [amount, setAmount] = useState(0);


    return (

        <div className="card m-5">
        <h5 className="card-header">Pridėti lėšų</h5>
        <div className="card-body">
            <div className="input-group mb-3">
                <span className="input-group-text">Suma</span>
                <input type="text" className="form-control" />
            </div>
            <button className="btn">pridėti lėšų</button>
        </div>
    </div>
    )
}