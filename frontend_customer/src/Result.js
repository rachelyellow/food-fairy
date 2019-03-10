import React, {Component} from 'react';
import NavBar from './NavBar.js';
import axios from 'axios'; 
import Card from 'react-bootstrap/Card'
import './style.css'


class Result extends Component {

    constructor(){
        super()
        this.state = {
            dishName: "",
            dishImage: "",
            restaurant: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/results/${id}`)
        .then(response => {
            let dishName = response.data.dish[0].name
            let dishImage = response.data.dish[0].image
            let restaurant = response.data.restaurant.name
            
            this.setState({dishName, dishImage, restaurant})
        })
    }

    render() {
        return (
            <div>
                <NavBar/>

                <Card id="card" bg="white" text="black">
                    <Card.Header id="mainheader">Based on your preferences, we reccomend this dish for you from <h4>{this.state.restaurant}</h4> </Card.Header>
                    <Card.Body>
                    <Card.Title id="dishname" >{this.state.dishName}</Card.Title>
                    <Card.Text>
                 <img id="image" src={this.state.dishImage}/>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }



}

export default Result