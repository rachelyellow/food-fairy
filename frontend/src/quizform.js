import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

import axios from 'axios'; 

class Quizform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      dishes :[]
     
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }



  componentDidMount(){

    axios.get('http://localhost:3000/restaurants/2/dishes')
    .then(response => {
      this.setState({dishes:response.data.dishes})
      console.log(response.data.dishes)
    });

  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(event.target.elements.question.value)

    const data = {}

    for (let entry of new FormData(event.target).entries()) {
        data[entry[0]] = entry[1]
        console.log(entry)
    }

    console.log("for loop data", data)
    axios.post('http://localhost:3000/restaurants/2/quizzes',
      data
     )
  }

  render() {
    return(
      <div>


        {/* <form onSubmit={this.handleSubmit} >
          <select name="option">
              <option value="1">Option1</option>
              <option value= "2">Option2</option>
              <option value="3">Option3</option>
          </select>
          <button type="submit">Submit</button>
        </form> */}



      



      <form  onSubmit={this.handleSubmit} name="option">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Options</th>
            <th>Recommended Dish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><textarea type="text" rows="3" name="question[1][name]"/></td>
            <td>1 <input type="text" name="question[1][options][1]"/><br/>2 <input type="text" name="question[1][options][2]"/><br/>3 <input type="text" name="question[1][options][3]"/></td>
            <td>Dish 1 
            <select name="dishid">
                  {this.state.dishes.map((dish, idx) => (
                      <option key={idx} value={dish.id}>{dish.name}</option>
              ))}
            </select>
              
              <br/>
              Dish 2   
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                        <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>
              
              <br/>
              
              Dish 3 
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                        <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>

            <br/>
              </td>
          </tr>
          <tr>
            <td>2</td>
            <td><textarea type="text" rows="3" name="question[2][name]"/></td>
            <td>1 <input type="text" name="question[2][options][1]"/><br/>2 <input type="text" name="question[2][options][2]"/><br/>3 <input type="text" name="question[2][options][3]"/></td>            
            <td>Dish 1 
            <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                        <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>
              <br/>
              
              Dish 2   
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                        <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>
              
              <br/>
              
              Dish 3 
              <select name="dishid">
                {this.state.dishes.map((dish, idx) => (
                  
                        <option key={idx} value={dish.id}>{dish.name}</option>
                    
                ))}
            </select>

            <br/>
              </td>
          </tr>
          <tr>
            <td>3</td>
            <td><textarea type="text" rows="3" name="question[3][name]"/></td>
            <td>
              1 <input type="text" name="question[3][options][1]"/><br/>
              2  <input type="text" name="question[3][options][2]"/><br/>
              3  <input type="text" name="question[3][options][3]"/></td>            
            <td>Dish 1 
                <select name="dishid">
                    {this.state.dishes.map((dish, idx) => (
                      
                            <option key={idx} value={dish.id}>{dish.name}</option>
                        
                    ))}
                </select>
              <br/>
              
              Dish 2   
              <select name="dishid">
                  {this.state.dishes.map((dish, idx) => (
                    
                          <option key={idx} value={dish.id}>{dish.name}</option>
                      
                  ))}
            </select>
              
              <br/>
              
              Dish 3 
              <select name="dishid">
              {this.state.dishes.map((dish, idx) => (
                 
                      <option key={idx} value={dish.id}>{dish.name}</option>
                  
              ))}
            </select>

            <br/>
              </td>
          </tr>
        </tbody>
      </Table>
      <button type="submit"> Submit </button>
      </form>
        
        {/* <form onSubmit={this.handleSubmit}>
          Question 1: <input type="text" name="question[1][name]"/>
          Option 1: <input type="text" name="question[1][options][1]"/>
          Dish 1:<input type="text" name="question[1][options][1][dish][1]"/>
          Option 2: <input type="text" name="question[1][options][2]"/>
          Dish 2:<input type="text" name="question[1][options][2][dish][2]"/>
          Option 3: <input type="text" name="question[1][options][3]"/>
          Dish 3:<input type="text" name="question[1][options][3][dish][3]"/>
      
          Question 2: <input type="text" name="question[2][name]"/>
          Option 1: <input type="text" name="question[2][options][1]"/>
          Dish 1:<input type="text" name="question[2][options][1][dish][1]"/>
          Option 2:<input type="text" name="question[2][options][2]"/>
          Dish 2:<input type="text" name="question[2][options][2][dish][2]"/>
          Option 3:<input type="text" name="question[2][options][3]"/>
          Dish 3:<input type="text" name="question[2][options][3][dish][3]"/>

          Question 3: <input type="text" name="question[3][name]"/>
          Option 1: <input type="text" name="question[3][options][1]"/>
          Dish 1:<input type="text" name="question[3][options][1][dish][1]"/>
          Option 2: <input type="text" name="question[3][options][2]"/>
          Dish 2:<input type="text" name="question[3][options][2][dish][2]"/>
          Option 3: <input type="text" name="question[3][options][3]"/>
          Dish 3:<input type="text" name="question[3][options][3][dish][3]"/>
          <button type="submit"> Submit </button>
        </form> */}
        {/* quiz map questions */}
        {/* {
          this.props.quiz.questions.map(q => 
            <input value={q.inquiry} onChange={this.updateQuestion}/>
          )
        } */}
      </div>
    )
  } 
}

export default Quizform