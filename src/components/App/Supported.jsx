import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


function Supported() {

    const history = useHistory()
    const dispatch = useDispatch()
    const [supportInput, setsupportInput] = useState('');
  
  
    const supports = () => {
      history.push('/Comments')

      dispatch ({
        type: 'ADD_SUPPORTED',
        payload: supportInput

      })

    }

    return (
         <div className="component">
             <h1 className='h1CSS'> How well are you being supported? </h1>
        <input type="text" 
        data-testid="input"
        className='input-row'
            placeholder="support?"
            value={supportInput}
            onChange={(event) => setsupportInput(event.target.value)}
            ></input>
                    <button onClick={supports} className='button' data-testid="next">NEXT3</button>

            
    </div>
    )
}


export default Supported;