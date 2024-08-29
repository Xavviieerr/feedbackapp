import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/feedbackStats'
import FeedbackForm from '../components/FeedbackForm'
import AboutPage from '../src/pages/AboutPage'
import {FeedbackProvider} from "./context/FeedbackContext";
import AboutIconLink from '../components/AboutIconLink'

function App() {

  return(
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
          <AboutIconLink/>
        </div>
      </Router>
    </FeedbackProvider>
  )
  // return(
  //   <Router>
  //    <Header>
  //       <div className="container">
  //           <Route exact path='/'>
  //                   <FeedbackForm handleAdd = {addFeedback} />
  //                   <FeedbackStats feedback={feedback}/>
  //                   <FeedbackList feedback={feedback}  handleDelete= {deleteFeedback}/>
  //           <Route/>

  //           <Route path='/about' component={AboutPage}/>
  //       </div>
  //     <Header />
  //   </Router>
  // );
}

export default App;