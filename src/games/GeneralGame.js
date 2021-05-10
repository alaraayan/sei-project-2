
import React from 'react'
import { getGeneralKnowledgeGame } from '../lib/api'


function GeneralGame() {
  const [questions, setQuestions] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const response = await getGeneralKnowledgeGame()
      setQuestions(response.data)
      
    }
    getData()
    
  }, [])

  function handleClick(e) {
    const choice = e.target.innerHTML
    const correctAnswers = questions.results.map(question => {
      return question.correct_answer
    })

    if (correctAnswers.includes(choice)) {
      console.log('WE DID IT')
    } else {
      console.log('wrong choice')
    }
  }


  
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="rows">
            {questions ? 
              questions.results.map(question => (
                <div key={question.correct_answer}>
                  <h2 dangerouslySetInnerHTML={ { __html: question.question } }></h2>
                  <button dangerouslySetInnerHTML={ { __html: question.correct_answer } } onClick={handleClick}></button>
                  <button dangerouslySetInnerHTML={ { __html: question.incorrect_answers[0] } } onClick={handleClick}></button>
                  <button dangerouslySetInnerHTML={ { __html: question.incorrect_answers[1] } } onClick={handleClick}></button>
                  <button dangerouslySetInnerHTML={ { __html: question.incorrect_answers[2] } } onClick={handleClick}></button>
                </div>
              ))
              : 
              <p>...loading</p>
            }
          </div>
        </div>
      </section>
      
      

    </>
  )
}
  
export default GeneralGame


///////

// import { Link } from 'react-router-dom'

// function CheeseCard({ _id, name, image, origin }) {
//   return (
//     <div className="column is-one-quarter-desktop is-one-third-tablet">
//       <Link to={`/cheeses/${_id}`}>
//         <div className="card">
//           <div className="card-header">
//             <div className="card-header-title">{name}</div>
//           </div>
//           <div className="card-image">
//             <figure className="image image-is-1by1">
//               <img src={image} alt={name} />
//             </figure>
//           </div>
//           <div className="card-content">
//             <h5>{origin}</h5>
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default CheeseCard


// const handleChange = event => {
//   setFormdata({ ...formdata, [event.target.name]: event.target.value })
// }