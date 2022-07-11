import { useState } from "react";
// i will be saved as id 
let i = 4;

// this note will save my all work 
let note3 = [
  { id: 1, string1: "wake up" },
  { id: 2, string1: " up" },
  { id: 3, string1: "good" },
];

function InputArea() {

    // this Card will help me to run map with my array  :start
  function Card1(e) {
    return (
      <div>
        <h2>
          <button onClick={() => note3.splice({ id: e.id1 })}>delete</button>
          <button onClick={() => console.log(e.id1)}>edit</button>
          <>{e.string1}</>
        </h2>
      </div>
    );
  }
   // this Card will help me to run map with my array  :end




//    function for mapping :start
  function thirdparty(e) {
    return <Card1 key={e.id} string1={e.string1} id1={e.id} />;
  }


  //    function for mapping :end



// hook for saving changes from input 
  const [string11, setstring1] = useState("");


// function to set my input  and
  function savestring(event) {
    setstring1(event.target.value);
  }


 
  function savetoarray() {
    i = i + 1;

    note3.push({ id: i, string1: string11 });
    console.log(note3);
  }
  return (
    <div>
      <input onChange={savestring} value={string11} />
      <button onClick={savetoarray}>save work</button>
      <div>
        <h1>saved work</h1>
        {note3.map(thirdparty)}
      </div>
    </div>
  );
}

export default InputArea;
