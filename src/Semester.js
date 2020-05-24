import React from 'react';
import Classes from './Classes';

class Semesters extends React.Component {
    constructor(props) {
        super(props);

        this.makeSems = this.makeSems.bind(this);
    }

    makeSems(item) {
        return <li><Classes sem={item.text} /></li>
    }

    render() {
        var semEntries = this.props.entries;
        var sems = semEntries.map(this.makeSems);

        return (
            <ul class='mySems'>
                {sems}
            </ul>
        )
    }
}

export default Semesters;