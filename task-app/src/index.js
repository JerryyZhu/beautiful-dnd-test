import React from 'react';
import Column from './column';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import '@atlaskit/css-reset';
import { DragDropContext} from 'react-beautiful-dnd';

class App extends React.Component {
    state = initialData;

    onDragEnd = result => {
        
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                {this.state.columnOrder.map( columnId => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                    return <Column key={column.id} tasks={tasks} column={column}/>
                })}
            </DragDropContext>
        );
        
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

