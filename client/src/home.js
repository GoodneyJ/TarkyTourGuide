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

                    <div id="news-container">
                        <div id="twitter-heading-container" className="heading-container">
                            <a href="https://twitter.com/bstategames"><h2>EFT News</h2></a>
                        </div>
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
                                width: '650',
                                chrome: 'transparent',
                                align: 'center',
                            }}
                            />
                        </div>

                        <div id="reddit-heading-container"  className="heading-container">
                                <a href="https://www.reddit.com/r/EscapefromTarkov/"><h2>EFT Reddit</h2></a>
                        </div>
                        <div id="reddit-container">
                            {this.state.threads.map(thread => {
                                return (
                                    <div className="reddit-thread-container">
                                        <span className="score-span"><FaArrowAltCircleUp className="upvote" /> {thread.data.score}</span> 
                                        <a className="reddit-thread" href={`https://www.reddit.com${thread.data.permalink}` }><p>{thread.data.title} by {thread.data.author}</p></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* RELATED LINKS */}
                    <div id="related-links-heading-container" className="heading-container">
                        <h2>Related Links</h2>
                    </div>
                    <div id="related-links-container">
                        <a className="related-links" href="https://escapefromtarkov.gamepedia.com/Escape_from_Tarkov_Wiki"><p>EFT Wiki</p></a>
                        <a className="related-links" href="https://www.reddit.com/r/EscapefromTarkov/"><p>EFT Reddit</p></a>
                        <a className="related-links" href="https://forum.escapefromtarkov.com/"><p>EFT Forums</p></a>
                        <a className="related-links" href="https://developertracker.com/escape-from-tarkov/"><p>Dev Tracker</p></a>
                        <a className="related-links" href="http://discord.gg/escapefromtarkovofficial"><p>EFT Official Discord</p></a>
                        <a className="related-links" href="https://discordapp.com/invite/9wQ9KcM"><p>EFT Unofficial Discord</p></a>

                    </div>



                </div>
            )
        }
    }
}
