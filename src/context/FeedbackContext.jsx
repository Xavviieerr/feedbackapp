import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

//now we assign context to a variable
const FeedbackContext = createContext()

//now  we create the provider
export const FeedbackProvider = ({children})=> {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'this is feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'this is feedback item 3',
            rating: 7
        }
    ])

    //state to set feedback
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    //add feeedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }    

    //delete feedback
    const deleteFeedback = (id)=> {
        if(window.confirm('Are you sure you want to delete id')){
          setFeedback(feedback.filter((item)=> item.id !== id))
        }
      }

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //update feedback data
    const updateFeedback = (id, updatedItem)=>{
        setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updatedItem} : item))
    }

    //return block
    return <FeedbackContext.Provider value={{
       feedback,
       feedbackEdit,
       deleteFeedback,
       addFeedback,
       editFeedback,
       updateFeedback,
    }}>
        {children} 
    </FeedbackContext.Provider>
}

//exportation
export default FeedbackContext;