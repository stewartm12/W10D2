import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.time = new Date()
        this.state = {
            secs: this.time.getSeconds(),
            mins: this.time.getMinutes(),
            hours: this.time.getHours(),
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
        const { secs, hours, mins } = this.state;

        return (
            <>
                <h1>{hours}:{mins}:{secs}</h1>
            </>
        )
    }
}

export default Clock;