import { useState } from 'react';
import './App.css'
import Items from './items'
function App() {
  
  const [ item, setItem ] = useState();
  const [ itemList, setItemList ] = useState([]); // Stores items within the empty array
  
  const createItem = (e) => {
    setItem(e.target.value);
  }
  
  const addItem = () => {
    setItemList([...itemList, item]) // Adding new items to the existing array
  }

// Functionality to delete items in the Todo List 👇
  const deleteItem = (id) => {
    console.log("deleted index", id);
    setItemList((itemList) => {
      return itemList.filter((arrayelements, index) => {
        return index !== id
      })
    })
  }

// Functionality to edit items in the Todo List 👇
  const [editIndex, setEditIndex] = useState(null);
    
  const editItem = (index) => {
    setItem(itemList[index]);
    setEditIndex(index);
  };

  const updateItem = (index) => {
    const updatedItem = prompt('Update the item/task:', itemList[index]);
    if (updatedItem !== null) {
      setItemList((prevItemList) => {
        const updatedList = [...prevItemList];
        updatedList[index] = updatedItem;
        return updatedList;
      });
    }
  }
  
  return (
    <>
      <div className="container">
        <div className="innerbox">
          <h1>Todo List</h1>

          <div>
            <div className='box'>
              <div><input type='text' placeholder='Add New Items/Tasks to the List' onChange={createItem} /></div>
              <div><button onClick={addItem}>Add</button></div>
            </div>
          </div>
          <br />
            {itemList.map((item, index) => {
              return (
                <div key={index}>
                  <Items data={item} id={index} onSelect={deleteItem} onEdit={() => updateItem(index)} />
                </div>
              )
            })}
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
