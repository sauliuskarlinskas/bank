export default function Delete({deleteModalData, setDeleteModalData, setDeleteData}) {

    const destroy = _=> {
        setDeleteData(deleteModalData);
        setDeleteModalData(null);
    }

    if (null === deleteModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title red-color">Ištrinti sąskaitą</h5>
                        <button type="button" className=" btn-del btn-close" onClick={_=> setDeleteModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Ar tikrai norite ištrinti sąskaitą?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" onClick={_=> setDeleteModalData(null)}>Atšaukti ištrinimą</button>
                        <button type="button" className="btn-del" onClick={destroy}>Ištrinti</button>
                    </div>
                </div>
            </div>
        </div>
    );
    

}