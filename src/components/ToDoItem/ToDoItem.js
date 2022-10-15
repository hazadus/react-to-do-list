import React from 'react';
import './ToDoItem.css';

export default class ToDoItem extends React.Component {
    constructor(properties) {
      super(properties);
      this.state  = {
      };
      this.title = properties.title;
      this.priority = properties.priority;
      this.id = properties.id;
    }
  
    // So called "Lifecycle Methods":
    // Called whenever Clock is rendered to the DOM for the first time
    componentDidMount() {
    }
  
    // Called when Clock is removed from DOM
    componentWillUnmount() {
    }
  
    render() {
      return (
        <div className='ToDo-Item' key={this.id}>
            {this.priority}. {this.title}
        </div>
      );
    }
  }
