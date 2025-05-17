

import Header from './Header';

import Content from './Content';
import Footer from './Footer';
import SearchItem from './SearchItem';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
    const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppinglist')));
    const [newItem,setnewItem]=useState('');
    const [search , setSearch]=useState('')

    const setAndSaveitems=(newItem)=>{
       setItems(newItem);
        localStorage.setItem('shoppinglist',JSON.stringify(newItem));
    }

    const addItem=(item)=>{
      const id=items.length?items[items.length -1].id+1:1;
      const mynewitem={id,checked:false,item};
      const listItems=[...items,mynewitem];
       setAndSaveitems(listItems);
       
    }
      const handlecheck = (id) => {
        const listItems = items.map((item)=>
            item.id===id?{...item,checked: !item.checked}:item);
       setAndSaveitems(listItems);
    }

    const handledelete =(id)=>{
       const listItems=items.filter((item)=>item.id!==id);
      setAndSaveitems(listItems);
    }

    const handleSubmit =(e)=> {
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem);
      setnewItem('');
     
    }
  return (
    <div className="App">
     <Header title="grocery list"/>
    
     <AddItem
        newItem={newItem}
        setnewItem={setnewItem}
        handleSubmit={handleSubmit}
     />
      <SearchItem
        search={search}
        setSearch={setSearch}
     />
     <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handlecheck={handlecheck}
      handledelete={handledelete}
      />
     <Footer length={items.length} />
    </div>
  );
}

export default App;
