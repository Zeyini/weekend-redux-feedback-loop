import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'



function Comments() {

    const history = useHistory()
    const dispatch = useDispatch()
    const [feedbackInput, setfeedbackInput] = useState('')
  
  
    const commenter = () => {
      history.push('/Feedback')

      dispatch({
        type:'ADD_COMMENT',
        payload:feedbackInput
      })
    }

    return (
        <div className="component">
             <h1 className='h1CSS'> Any comments you want to leave? </h1>
            <input type="text"
            data-testid="input"
                className='input-row'
                placeholder="comments"
                value={feedbackInput}
                onChange={(event) => setfeedbackInput(event.target.value)}
            ></input>
            <button onClick={commenter} className='button' data-testid="next">NEXT4</button>

        </div>
    )
}


export default Comments;