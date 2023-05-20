import { useEffect, useState } from "react";


export default function Add({ addModalData, setAddModalData, setAddData }) {

    const [balance, setBalance] = useState(null);



    const save = _ => {
        setAddData({...addModalData, Balance: balance, id: addModalData.id});
        setAddModalData(null);
    }


    useEffect(() => {
        if (null === addModalData) {
            return;
        }
        setBalance(addModalData.balance)
    }, [addModalData]
    )



    if (null === addModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title red-color">Pridėti lėšų</h5>
                        <button type="button" className=" btn-del btn-close" onClick={_ => setAddModalData(null)}></button>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" id="amount"/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" onClick={save}>Pridėti</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
