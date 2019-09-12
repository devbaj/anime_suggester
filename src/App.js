import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GenreSelector></GenreSelector>
      <TagSelector></TagSelector>
      <MediumSelector></MediumSelector>
      <TitleSelector></TitleSelector>
    </div>
  );
}

function Header() {
  return(
    <div className="Header">
      THIS IS THE HEADER
    </div>
  )
}

class GenreSelector extends React.Component {

  render() {
    return (
    <div>
        <p>GenreSelector rendered</p>
        <FilterableList></FilterableList>
      </div>
    )
  }
}

class TagSelector extends React.Component {

  render() {
    return(
      <div>
        <p>TagSelector rendered</p>
        <FilterableList></FilterableList>
      </div>
    )
  }
}

class MediumSelector extends React.Component {

  render() {
    return (
      <div>
        <p>MediumSelector rendered</p>
        <FilterableList></FilterableList>
      </div>
    )
  }
}

class TitleSelector extends React.Component {

  render() {
    return (
      <div>
        <p>TitleSelector rendered</p>
        <FilterableList></FilterableList>
      </div>
    )
  }
}

class FilterableList extends React.Component {

  render() {
    return (
      <div>
        <DynamicSearch></DynamicSearch>
        <p>list goes here</p>
      </div>
    )
  }
}

class DynamicSearch extends React.Component {

  render() {
    return (
      <p>DynamicSearch rendered</p>
    )
  }
}



export default App;
