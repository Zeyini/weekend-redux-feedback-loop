import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios';


function Feedback() {

    const history = useHistory()
  
    // selecting the reducer to access the current state of each variable 
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const supported = useSelector(store => store.supported);
    const comments = useSelector(store => store.comments);

  
    const goHome = () => {
      history.push('/Thankyou')

      axios({
        method: 'POST',
        url: 'api/feedback',
        data: {
            feeling: feeling,
            understanding: understanding,
            supported: supported,
            comments: comments
        }
        // if the redux is holding an array in each component, how would i send it ? 
      })

      .then((response) => {
       
        // 3. Clear the form inputs:
        // setTitleInput('')
        // setAuthorInput('')
      })
      .catch((error) => {
        console.log('handleSubmit error in axios POST:', error)
      })



    }
  
  
    return (
        <div className="component ">
            <h1 className='h1CSS'>Review Your Feedback</h1>
                <div>
                    Feelings: {feeling}
                </div>
                <div>
                    Feelings: {understanding}
                </div>
                <div>
                    Feelings: {supported}
                </div>
                <div>
                    Feelings: {comments}
                </div>
                <button onClick={goHome} className='button' data-testid="next">SUBMIT</button>

            
        </div>
    )
}

export default Feedback;