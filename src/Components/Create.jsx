
import { useState, useRef ,useEffect } from 'react';

export default function CreateAccount({ setCreateData }) {

    // const [name, setName] = useState();
    //  const addName = _ => {
    //    setCreateData();
    //  setName();
    //  }
    //const [lastName, setLastName] = useState();
    //   const addLastName = _ => {
    //       setCreateData();
    //       setAccount(account);
    //  }
    //  const [account, setAccount] = useState();
    // const create = _ => {
    //     setCreateData();
    //      setAccount({addName, addLastName});
    // }


    const nameRef = useRef(null);
    const lastNameRef = useRef(null);

    const save = _ => {

        const name = nameRef.current.value;
        const lastName = lastNameRef.current.value;

        setCreateData({
            Name: name,
            LastName: lastName,
            Balance: 0
        });
    };


    return (
        <div className="card m-5">
            <h5 className="card-header">Sukurti naują sąskaitą</h5>
            <div className="card-body">
                <div className="input-group mb-3">
                    <span className="input-group-text">Vardas</span>
                    <input type="text" id='name' ref={nameRef} className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Pavardė</span>
                    <input type="text" id='lastName' ref={lastNameRef} className="form-control" />
                </div>
                <button className="btn" onClick={save}>Sukurti sąskaitą</button>
            </div>
        </div>
    )

}