import React from 'react';
// import logo from './logo.svg';
import './App.css';
import API from './apiHandler';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      api: new API(),
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <GenreSelector
          api={this.state.api}
        ></GenreSelector>
        <TagSelector
          api={this.state.api}
        ></TagSelector>
        <MediumSelector></MediumSelector>
        <TitleSelector></TitleSelector>
      </div>
  )};
}

function Header() {
  return(
    <div className="Header">
      THIS IS THE HEADER
    </div>
  )
}

class GenreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      title: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.props.api.testKey();
    this.getGenreList();
  }

  async getGenreList() {
    console.log('entered getGenreList');
    this.state.info = await this.props.api.testRequest(820)
      .then(res => {
        this.setState({loading: false, data: res});
        this.setState({title: res.data.Media.title.english});
      });
    console.log(this.state.title);
  }

  renderList(data) {
    return (
      <ul>
        <li>{data}</li>
      </ul>
    );
  }

  render() {
    const { loading, data } = this.state;

    return (
    <div>
        <p>GenreSelector rendered</p>
        {loading ? "data loading" : this.renderList(this.state.title)}
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
