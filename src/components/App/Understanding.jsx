import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Understanding() {

    const history = useHistory()
    
    const dispatch = useDispatch()

    const [understandingInput, setunderstandingInput] = useState('');
  
  
  
    const understandings = () => {
      history.push('/Supported')

      dispatch({
        type: 'ADD_UNDERSTANDING', 
        payload: understandingInput
      }) 
    }
  

    return (
        <div className="component ">
            <h1 className='h1CSS'> How well are you understanding the content? </h1>
        <input type="text" 
        data-testid="input"
        className='input-row'
            placeholder="understanding?"
            value={understandingInput}
            onChange={(event) => setunderstandingInput(event.target.value)}
            ></input>
        <button onClick={understandings} className='button' data-testid="next">NEXT2</button>


    </div>
    )

}


export default Understanding;