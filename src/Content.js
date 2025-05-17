
import Items from "./Items"

const Content = ({items,handlecheck,handledelete}) => {
   
  

    // const [count, setCount]=useState(0);

    // const handle=()=>{
    // const name=["abhi","hi","woo"];
    // const int =Math.floor(Math.random()*3);
    // setName(name[int]);
  

//   const handelclick =()=> {
//     setCount(count+1)
//     setCount(count+1)
//     console.log(count)
//   }

//   const handelclick2 =(name)=> {
//     console.log('${name} was clickerd')
//   } 
//   const handelclick3 =(e)=> {
//     console.log(e.target.innerText)
//   }
  return (
    <main>
        {items.length?(
            <Items
                items={items}
                handlecheck={handlecheck}
                handledelete={handledelete} />
            ):(
                <p style={{marginTop:'2rem'}}>ypur list is empty.</p>
            )}
        {/* <p onDoubleClick={handelclick}>
            hello {name}!
        </p>
        <button onClick={handle}>click it name</button>
        <button onClick={handelclick}>click it</button>
        <button onClick={handelclick}>click it</button> */}
    </main>
  )
}

export default Content;
