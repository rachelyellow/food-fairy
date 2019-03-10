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

                <div id="card">
                    <div id="mainheader">Based on your preferences, we reccomend this dish for you from <h4>{this.state.restaurant}</h4> </div>
                    <div>
                    <div id="dishname" >{this.state.dishName}</div>
                    <div>
                 <img id="image" src={this.state.dishImage}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default Result