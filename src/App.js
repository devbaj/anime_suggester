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
      genres: null,
      loading: true,
    }
  }

  componentDidMount() {
    console.log('GenreSelector mounted succesfully')
    this.getGenreList();
  }

  async getGenreList() {
    await this.props.api.getGenres()
      .then(res => {
        this.setState({loading: false, genres: res.data.GenreCollection})
      })
      .catch(err => console.error(err));
    }


  renderList(data) {
    console.log(data);
    const genreList = data.map( (item, index) => {
      return(
        <li key={index}>{item}</li>
      )
    });
    return (
      <ul>
        {genreList}
      </ul>
    );
  }

  render() {
    var loading = this.state.loading;
    const genres = this.state.genres;

    return (
    <div>
        <p>GenreSelector rendered</p>
        {loading ? "Loading..." : this.renderList(genres)}
        <FilterableList></FilterableList>
      </div>
    )
  }
}

class TagSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null,
      loading: true
    }
  }

  componentDidMount() {
    console.log('TagSelector mounted successfully');
    this.getTagList();
  }

  async getTagList() {
    await this.props.api.getTags()
      .then(res => {
        this.setState({loading: false, tags: res.data.TagCollection})
      })
      .catch(err => console.error(err));
  }

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
