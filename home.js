import React, { Component } from 'react'
import axios from 'axios';
import { Timeline } from 'react-twitter-widgets'
import { FaArrowAltCircleUp } from 'react-icons/fa'

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
            console.log(this.state.threads[0].data)
        })
        .catch(() => {
            console.log('reddit-Data was not recieved.');
        }); 


    }

    componentDidMount = () => {
        this.getRedditThreads();
    }

    
    render() {
        
        if(this.state.loading === 0) {
            return(<div>loading...</div>)
        } else {
            return (
                <div id='home-container'>
                    <h2> EFT News </h2>
                    <div id="news-container">
                        <div id="twitter-container">
                            <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'bstategames'
                            }}
                            
                            options={
                                {
                                theme: 'dark',
                                height: '800',

                                width: '1000',
                                align: 'center',
                            }}
                            />
                        </div>
                        <div id="reddit-container">
                            <h2>EFT Reddit</h2>
                            {this.state.threads.map(thread => {
                                
                                return (
                                    <div>
                                        <a className="reddit-thread" href={`https://www.reddit.com${thread.data.permalink}` }><p><span className="score-span"><FaArrowAltCircleUp id="upvote" /> {thread.data.score}</span> {thread.data.title} by {thread.data.author}</p></a>
                                    </div>
                                )
                            })}

                        </div>
                    </div>


                </div>
            )
        }
    }
}
