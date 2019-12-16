import React, { Component } from 'react';
import './App.css';
import { CardList } from './cpmponents/card-list/card-list.component';
import { SearchBox } from "./cpmponents/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    };

    render() {
        const {monsters, searchField} = this.state;
        const monstersFilter = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <SearchBox
                    placeholder="monsters search"
                    handleChange={this.handleChange}/>
                <CardList monsters={monstersFilter}/>
            </div>
        );
    }

}


export default App;
