import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Components/Create';
import { useEffect, useState } from 'react';
import { crudCreate, crudRead } from './Functions/localStorageCrud';
import List from './Components/List';

const KEY = 'allAccounts';

export default function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [account, setAccount] = useState(null);

    const [createData, setCreateData] = useState(null);

    useEffect(_ => {
        setAccount(crudRead(KEY));
    }, [listUpdate]);

    useEffect(_ => {
        if (null === createData) {
            return;
        }
        crudCreate(KEY, createData);
        setListUpdate(Date.now());
    }, [createData]);


    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
              <Create setCreateData={setCreateData} />
          </div>
          <div className='col-6'>
              <List 
              account={account}
              />
          </div>

        </div>

      </div>
    )
    }