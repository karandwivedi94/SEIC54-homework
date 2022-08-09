import React, {Component} from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Table from './Table';


class TeamSearch extends Component{
    constructor() {
        super();
        this.fetchTeams = this.fetchTeams.bind(this);
        this.state = {
            stats: []
        };
    }

    fetchTeams (q){
        console.log('searching API for', q);
        const ApiURL = 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?'
        const ApiParams ={
            season: q,
            sort: 'desc'
        };
    
        axios(ApiURL, { params: ApiParams }).then((response) => {
                for(let i=0;i<response.data.data.standings.length;i++){
                const stats = response.data.data.standings[i].team.logos[0].href; // fiind a way to add this value to stats array without mutating the stats array
                this.setState({stats: stats});}
    });
    }
    

    render() {
        return (
            <div>
                <h1>Premier League winners</h1>
                <SearchForm onSubmit={ this.fetchTeams } />
                <Table stats = {this.state.stats} />  
            </div>
        );
    }

}

export default TeamSearch;