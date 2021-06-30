import React, { useState, components, useEffect } from 'react';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import manager from './ethereum/manager';
import student from './ethereum/student';
import web3 from './ethereum/web3';

function App() {
  
   const [owner, setowner] = useState([]);
   const [button_click, setbutton_click] = useState(false);


  useEffect(() => {

    update_eth();

  }, [button_click]);

  async function update_eth(){
      const retrieved_owner = await manager.methods.view_recently_added_student_contract().call();
      console.log("fetched ");
      console.log(retrieved_owner);
      setowner(retrieved_owner);
    };
    
  const function_button = () =>{
    setbutton_click(true);
  };
  
    //web3.eth.getAccounts().then(console.log);
    
    
    console.log(web3.version);
    //update_eth();
    
    

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        <Home/>
        <button onClick={function_button}>Fetch</button>
      </main>
    </React.Fragment>
  );
}

export default App;
