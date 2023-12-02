import { useState } from 'react'


function App() {
  // One button that shows pushing items to stack and another button that shows poping items out of stack
  const [stack, setStack] = useState([])

  const addToStack = () => {
    const newItem = stack.length;
    const newArray = [...stack];
    newArray.push(newItem);
    setStack(newArray)
  }

  const removeFromStack = () => {
    const newArray = [...stack];
    newArray.pop();
    setStack(newArray)
  }

  return (
    <div className='main-container'>
      <h1>Stack</h1>
      <button onClick={() => addToStack()}>Push</button>
      <button onClick={() => removeFromStack()}>Pop</button >
      <div className='stack-container'>
        {stack.length === 0 ? <p>Stack is empty</p> : stack.map((item) => <p key={item} className='stack-item'>{item}</p>)}
      </div>
    </div>
  )
}

export default App
