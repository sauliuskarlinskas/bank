
import { useState } from "react"

export default function Create() {

    const [acount, setAcount] = useState();

    return (
        <div className="card m-5">
            <h5 className="card-header">Create new acount</h5>
            <div className="card-body">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Second name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <button className="btn">Create acount</button>
            </div>
        </div>
    )

}