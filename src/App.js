import React, { Component } from 'react';
import Header from './Header'
import SideBar from './SideBar'
import Map from './Map'
import * as FoursquareAPI from './FoursquareAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class App extends Component {

  state = {
    venue: [],
    searchedVenues: '',
    placeToShow: '',
    isOpen: false,
    error: false
  }


  componentDidMount(){
    FoursquareAPI.getVenue()
    .then( venue => {
      this.setState({ venue })
    })
    .catch(err => {
      alert("failed")
      this.setState({ error: true }); 
    })
  }
  
  searchQuery = (query) => {
    this.setState({ searchedVenues: query })
    
}

  openNav() {
    document.getElementById("aside").style.width = "350px";
    document.getElementById('aside').focus();
    
  }

 closeNav() {
    document.getElementById("aside").style.width = "0";
    document.getElementById('map-section').focus();
  }

  onToggleOpen = (id) => {
    this.setState({
      placeToShow: id,
      isOpen: true
    })
  }

  

  render() {

        let showingVenueName;

        if(this.state.searchedVenues){
            const match = new RegExp(escapeRegExp(this.state.searchedVenues), 'i')
            showingVenueName = this.state.venue.filter(venue => match.test(venue.name))
        } else {
            showingVenueName = this.state.venue
        }

        showingVenueName.sort(sortBy('name'))
    
    return (
      <div className="App">
      
        <SideBar
          showingVenueName={showingVenueName}
          onToggleOpen={this.onToggleOpen}
          closeNav={this.closeNav}
          venue={this.state.venue}
          searchedVenues={this.state.searchedVenues}
          searchQuery={this.searchQuery}
          
          />
        
        <main className='main-page'>
          
          <div className='right-section' id='right-section'>
            <Header openNav={this.openNav}/>
            <section id='map-section' tabIndex='0'>

              <Map
                v={showingVenueName}
                onToggleOpen={this.onToggleOpen}
                venue={showingVenueName}
                placeToShow={this.state.placeToShow}
                isOpen={this.state.isOpen}
                containerElement={<div className='containerElement'/>}
                mapElement={<div className='mapElement' />}
                loadingElement={<div className='loadingElement' />}
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDsZFC_iwuq_9-Gd2YMnwV9IpavnHuqthU&v=3.exp&libraries=geometry,drawing,places'
              />

              
            </section>
            {/* </Footer/> */}
          </div>
        </main>
      </div>
    );
  }
}

export default App;

