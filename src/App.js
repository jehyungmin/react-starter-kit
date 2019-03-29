import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import axios from 'axios';

class App extends Component {

    componentDidMount() {
        //process.env[NODE_TLS_REJECT_UNAUTHORIZED] = '0';
        axios.get('https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=700')
        //axios.get('https://yts.am/api/v2/list_movies.json?sort by=download_count&limit=50')
        //axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response))
        //console.log(fetch("https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=700"));


        //const httsAgent = new https.Agent({ rejectUnauthorized: false });
        // const instance = axios.create({G
        //     httpsAgent: new https.Agent({
        //         rejectUnauthorized: false
        //     })
        // });
        // instance.get('https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=700');

        // const agent = new https.Agent({
        //     rejectUnauthorized: false
        // });

        //axios.get('https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=700', {httpsAgent:agent})
        // .then(response => console.log(response));
    }

    render() {
        const { CounterActions, number } = this.props;
        
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.incrementAsync}>+</button>
                <button onClick={CounterActions.decrementAsync}>-</button>
            </div>
        );
    }
    
}




export default connect(
    (state) => ({
        number: state.counter
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(App);