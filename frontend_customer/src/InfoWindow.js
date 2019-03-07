import React, {Component} from 'react';
import { InfoWindow } from 'google-maps-react';

class InfoWindow extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.display) {
      return (
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
          <p>{this.state.selectedPlace.description}</p>
          <h3>{this.state.formatted_address}</h3>
          <img style={imageStyle} src={this.state.selectedPlace.image}/>
        </div>
        <div>
          <Router>
            <Link to= {to}>Quiz</Link>
          </Router>
        </div>
      );
    }
  return null;
  }
}
export default InfoWindow;







<InfoWindow
  marker={this.state.activeMarker}
  visible={this.state.showingInfoWindow}
  onClose={this.onClose}
  >
  <div>

  </div> 
  </InfoWindow>