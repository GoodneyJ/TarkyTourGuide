import React, { Component } from 'react'
import axios from 'axios';
import { Timeline } from 'react-twitter-widgets'

export default class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            threads: [],
            loading: 0
        }

        this.getRedditThreads = this.getRedditThreads.bind(this);
    }

    getRedditThreads = () => {
        axios.get('https://www.reddit.com/r/EscapeFromTarkov.json')
        .then((response) => {
            const data = response.data.data.children
            this.setState({
                threads: data,
                loading: 1
            })
            console.log('reddit-Data has been received!');
            
        })
        .catch(() => {
            console.log('reddit-Data was not recieved.');
        }); 


    }

    componentDidMount = () => {
        this.getRedditThreads();
    }

    
    render() {
        
        if(this.state.loading == 0) {
            return(<div>loading...</div>)
        } else {
            return (
                <div id='home-container'>
                    <div id="news-container">

                        <h2>  </h2>

                        <div id="twitter-container">
                            <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'bstategames'
                            }}
                            
                            options={
                                {
                                theme: 'dark',
                                height: '400',
                                width: '90%'
                            }}
                            />
                        </div>
                        <div id="reddit-container">
                            <h2>EFT Reddit</h2>
                            {this.state.threads.map(thread => {
                                
                                return (
                                    <div>
                                        <a className="reddit-thread" href={`https://www.reddit.com${thread.data.permalink}` }><p>{thread.data.title} by {thread.data.author}</p></a>
                                    </div>
                                )
                            }, console.log(this.state.threads[0].data.permalink))}

                        </div>
                    </div>


                </div>
            )
        }
    }
}
