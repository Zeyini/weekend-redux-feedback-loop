import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Feeling() {

    const history = useHistory()
    const dispatch = useDispatch()

    const [FeelingInput, setFeelingInput] = useState('');
  
    const feels = () => {
    history.push('/Understanding')

    dispatch({
      type: 'ADD_FEELING', 
      payload: FeelingInput
    }) 

    }
  
    

    return (
       <div className="component">
        <h1 className='h1CSS'> How are you feeling today? </h1>

     
        <input type="text" 
        data-testid="input"
        className='input-row'
            placeholder="feel?"
            value={FeelingInput}
            onChange={(event) => setFeelingInput(event.target.value)}
            ></input>
          
             <button onClick={feels} className='button' data-testid="next"> NEXT1</button>
        

    </div>
       
    )

}


export default Feeling;