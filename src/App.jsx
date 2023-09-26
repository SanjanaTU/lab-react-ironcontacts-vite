import "./App.css";
import React from "react";
import contactsJSON from"./contacts.json"

function App() {
  const [contacts,setContacts] = React.useState(contactsJSON.slice(0,5));

  const addRandomContact = () => {
    if(contacts.length === contactsJSON.length) {
      return;
    }
    const randomcontact = Math.floor(Math.random()* contactsJSON.length)
    const randomNumber = contactsJSON[randomcontact]
    if (!contacts.some((contact) => contact.id === randomNumber.id)) {
      setContacts([...contacts, randomNumber]);
    }

      
    
  };

  const popularitysort = () => {
    const contactsCopy = [...contacts];
    contactsCopy.sort((elem1, elem2) => elem1.popularity < elem2.popularity ? 1 : -1);
    setContacts(contactsCopy);
  } 

  const sortByName = () => {
    const Copy = [...contacts];
    Copy.sort((elem1, elem2) => elem1.name > elem2.name ? 1 : -1);
    setContacts(Copy);
  } 

  function delet(id) {
    let copy = [...contacts];
    copy.splice(id, 1);
    setContacts(copy)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button className='action-btn'  onClick={addRandomContact}>Add random Number</button>
      <button className='action1-btn'  onClick={popularitysort}>Poparlity</button>
      <button className='action2-btn'  onClick={sortByName}>SortByName</button>
      <table>
        <thead>
          <tr>
            <th>Pictures</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>wonOscar</th>
            <th>wonEmmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return (
              <tr key={oneContact.id}>
            <td><img src={oneContact.pictureUrl} style={{height:"100px"}}/></td>
            <td>{oneContact.name}</td>
            <td>{oneContact.popularity}</td>
            <td>{oneContact.wonOscar && '🏆'}</td>
            <td>{oneContact.wonEmmy&& '🏆'}</td>
            <td><button onClick={() => delet(oneContact.id)}>Delete</button></td>
          </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );

        }

export default App;
