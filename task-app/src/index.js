import React from 'react';
import Column from './column';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import '@atlaskit/css-reset';

class App extends React.Component {
    state = initialData;

    render() {
        return this.state.columnOrder.map( columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} tasks={tasks} column={column}/>
        })
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

