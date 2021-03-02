import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.time = new Date()
        this.state = {
            secs: this.time.getSeconds(),
            mins: this.time.getMinutes(),
            hours: this.time.getHours(),
            date: this.time.toDateString()
        }

        this.tick = this.tick.bind(this)
    }

    tick() {
        // const { secs, hours, mins } = this.state;
        
        this.setState({
            secs: this.state.secs + 1 
        })
        if (this.state.secs === 60) {
            this.state.secs = 0;
            this.setState({
                mins: this.state.mins + 1
            })
            if (this.state.mins === 60) {
                this.state.mins = 0;
                this.setState({
                    hours: this.state.hours + 1
                })
                if (this.state.hours === 24) {
                    this.state.hours = 0;
                }
            }
        }
 
    }


    componentDidMount() {
       this.id = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }


    render() {
        const { secs, hours, mins, date } = this.state;

        return (
            <div className="clock_container">
                <h1>Our Clock</h1>
                <div className="time">
                    <h2 className="label">Time:</h2>
                    <h2 className="clock">{hours}:{mins}:{secs}</h2>
                </div>
                <div className="date">
                    <h2 className="label">Date:</h2>
                    <h2 className="clock">{date}</h2>
                </div>
            </div>
        )
    }
}

export default Clock;