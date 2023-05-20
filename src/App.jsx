import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { crudCreate, crudDelete, crudRead } from './Functions/localStorageCrud';
import List from './Components/List';
import CreateAccount from './Components/Create';
import Delete from './Components/Delete';
import Add from './Components/Add';

const KEY = 'allAccounts';

export default function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [accounts, setAccounts] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [addModalData, setAddModalData] = useState(null);
  const [addData, setAddData] = useState(null);

  useEffect(_ => {
    setAccounts(crudRead(KEY).map((a, i) => ({ ...a, row: i, show: true })));
  }, [listUpdate]);

  useEffect(_ => {
    if (null === createData) {
      return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
  }, [createData]);

  useEffect(_ => {
    if (null === addData) {
      return;
    }
    crudCreate(KEY, addData, addData.id);
    setListUpdate(Date.now());
  }, [addData]);

  useEffect(_ => {
    if (null === deleteData) {
      return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
  }, [deleteData]);

  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <CreateAccount setCreateData={setCreateData} />
          </div>
          <div className='col-8'>
            <List
              accounts={accounts}
              setDeleteModalData={setDeleteModalData}
              setAddModalData={setAddModalData}
            />
            
          </div>

        </div>

      </div>
      <Delete deleteModalData={deleteModalData}
        setDeleteModalData={setDeleteModalData}
        setDeleteData={setDeleteData}
      />
      <Add 
      addModalData={addModalData}
      setAddModalData={setAddModalData}
      addData={addData}
      setAddData={setAddData}
      />
    </>
  )
}

