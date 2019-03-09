import React, {Component} from 'react';
import NavBar from './NavBar.js';
import axios from 'axios'; 


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
                <div>
                    <h3>Based on your preference, we recommend this dish for you from {this.state.restaurant} </h3>
                    <h1>{this.state.dishName}</h1>
                    <img alt="" src={this.state.dishImage}/>
                </div>
            </div>
        );
    }



}

export default Result