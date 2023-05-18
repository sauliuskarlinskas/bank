export default function Deleate({deleateModalData, setDeleateModalData, setDeleateData}) {

    const destroy = _=> {
        setDeleateData(setDeleateModalData);
        setDeleateModalData(null);
    }

    if (null === deleateModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title red-color">Ištrinti sąskaitą</h5>
                        <button type="button" className=" btn-del btn-close" onClick={_=> setDeleateModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Ar tikrai norite ištrinti sąskaitą?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" onClick={_=> setDeleateModalData(null)}>Atšaukti ištrinimą</button>
                        <button type="button" className="btn" onClick={destroy}>Ištrinti</button>
                    </div>
                </div>
            </div>
        </div>
    );
    

}