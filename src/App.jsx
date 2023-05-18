import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { crudCreate, crudRead } from './Functions/localStorageCrud';
import List from './Components/List';
import CreateAccount from './Components/Create';
import AddMoney from './Components/Add';
import Deleate from './Components/Deleate';

const KEY = 'allAccounts';

export default function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [accounts, setAccounts] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleateModalData, setDeleateModalData] = useState(null);
  const [deleateData, setDeleateData] = useState(null);


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
    if (null === deleateData) {
      return;
    }
    crudCreate(KEY, deleateData.id);
    setListUpdate(Date.now());
  }, [deleateData]);


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
              setDeleateModalData={setDeleateModalData}

            />
            <AddMoney />
          </div>

        </div>

      </div>
      <Deleate deleateModalData={deleateModalData}
        setDeleateModalData={setDeleateModalData}
        setDeleateData={setDeleateData}
      />
    </>
  )
}