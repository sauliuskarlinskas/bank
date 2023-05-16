
import {useState } from 'react';

export default function Create({setCreateData}) {

    const [account, setAccount] = useState('Name,Last name');

    const create = _ => {
        setCreateData({account});
        setAccount('name','last-name' );
    }

    return (
        <div className="card m-5">
            <h5 className="card-header">Create new account</h5>
            <div className="card-body">
                <div className="input-group mb-3">
                    <span id='name' className="input-group-text" >Name</span>
                    <input type="text" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <span id='last-name' className="input-group-text" >Last name</span>
                    <input type="text" className="form-control"/>
                </div>
                <button className="btn" onClick={create}>Create account</button>
            </div>
        </div>
    )

}