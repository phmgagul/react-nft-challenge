import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'  
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';


function App() {
  const [punkListData, setPunkListData] = useState([])  /*punkListData is a variable that  stores the list of punks from openSea because API call */
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {   /* getMyNfts is an async function */
      const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x99b44DFB14F7b275345BB10C40e69EE70ac78667&order_direction=asc'   /*collection wallet */
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }  

    return getMyNfts()
  }, [])

  return  (
  <div className='app'>
    <Header />
    {punkListData.length > 0 && (        /*here we are asking if there are any punk/ if yes then proceed to do the below code. otherwise if there are no punks it wont show anything*/
    <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <Punklist 
        punkListData={punkListData} 
        setSelectedPunk={setSelectedPunk} 
      />
    </>
    )}
  </div>
  )

}

export default App
