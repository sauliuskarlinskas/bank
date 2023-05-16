import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Components/Create';
//import { useEffect, useState } from 'react';
//import { crudCreate, crudRead } from './Functions/localStorageCrud';
import List from './Components/List';

const KEY = allAcounts;
export default function App() {

  const [acount, setAcount] = useState(null);

    const [createData, setCreateData] = useState(null);

    useEffect(_ => {
        setAcount(crudRead(KEY));
    }, []);

    useEffect(_ => {
        if (null === createData) {
            return;
        }
        crudCreate(KEY, createData)
    }, [createData]);


    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
              <Create />
          </div>
          <div className='col-6'>
              <List />
          </div>

        </div>

      </div>
    )
    }