import { useHistory } from 'react-router-dom'
// import { useSelector } from 'react-redux'


function Thankyou() {

    const history = useHistory()
    


    // const feeling = useSelector(store => store.feeling);
    // const understanding = useSelector(store => store.understanding);
    // const supported = useSelector(store => store.supported);
    // const comments = useSelector(store => store.comments);




    const New = () => {
    history.push('/')

    }
  
  
    return (
        <>
        <div className='divCSS'>Feedback!</div>
        <div className="component2">
            
            
            <h1 className='h1CSS'>Thank you!</h1>
            <button onClick={New} className='button2' data-testid="next">Leave New Feedback</button>

           
             

               
        </div>
        </>
    )
}

export default Thankyou;