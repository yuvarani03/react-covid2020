import React, { Component } from 'react';
import OverallComponent from './OverallComponent';
export default class SearchComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      stateList:this.props.listOfStates,
      searchedState:''
    };
  }
  updateSearchedStateHandler = event =>{
      this.setState({ searchedState: event.target.value });
  }
  searchState=(stateList)=>{
    let dataSearched=this.state.stateList;
    if(!(this.state.searchedState === "")){
        dataSearched = dataSearched.filter(item =>{
            if(item.state.toLowerCase().includes(this.state.searchedState.toLowerCase()))
                return item;
        })
    }
    else{
      console.log("empty search");
    }
    return (<OverallComponent stateListSearched={dataSearched}></OverallComponent>);
  }
  render(){
      return (
        <>
          <div>
            <label>Search</label>
            <input className="search" type="text" value={this.state.searchedState} onChange={this.updateSearchedStateHandler}></input>       
          </div>
          <div>  
            {this.searchState(this.state.stateList)}
          </div>
        </>
      );
  }
}
