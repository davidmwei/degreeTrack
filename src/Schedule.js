import React from 'react';
import Semester from './Semester';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sems: [],
            cur: 1
        };
        
        this.addSem = this.addSem.bind(this);
    }
    
    addSem(i) {
        var newSem = {
            text: 'Semester ' + this.state.cur,
            key: this.state.cur
        };

        this.setState((prevState) => {
            return {
                sems: prevState.sems.concat(newSem),
                cur: this.state.cur + 1
            }
        })
        i.preventDefault();

        console.log(this.state.sems);
    }

    render() {
        return (
            <div id='schedulemain'>
                <form onSubmit={this.addSem}>
                    <button type="addSem">Add Semester</button>
                </form>
                <Semester entries={this.state.sems} />
            </div>
        )
    }
}

export default Schedule;