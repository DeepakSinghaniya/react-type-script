import  { useEffect, useLayoutEffect, useRef, useState, forwardRef,useImperativeHandle } from 'react';


type MyInputHandles = {
  myFocus: ()=> void;
}

const MyInputBox = forwardRef<MyInputHandles, {name: string}>( (props:{name:string}, myRef) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(myRef, ()=>{
    return {
      myFocus: ()=>{
        if(inputRef.current) {
        inputRef.current.focus();
        }
      }
    };
  });

  
  return <input ref={inputRef} type="text" name={props.name} />
});

function App() {
  const inputRef:any = useRef(null);

  useEffect(()=>{
    inputRef.current?.myFocus();
    console.log(inputRef);
  },[]);
  return (
    <div>
      <button>focus</button>

  <MyInputBox ref={inputRef} name="name" />
    </div>
  );
}

export default App;
