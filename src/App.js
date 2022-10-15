import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem/ToDoItem';
import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [],
      newTodoText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <>
          <div className='Search-Bar'>
            <form>
              <input/>
            </form>
          </div>
          <div className='ToDo-List-View'>
          {
            this.state.toDoItems.map(
              todo => (
                <ToDoItem title={todo.title} priority={todo.priority} key={todo.id}/>
              )
            )
          }
          </div>
          <div className='Add-ToDo-Bar'>
            <form onSubmit={this.handleSubmit}>
              <label>
                New To2:
              </label>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.newTodoText}
              />
              <button>
                Add
              </button>
            </form>
          </div>
        </>
    );
  }

    // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/sort
    compareFnDesc(a, b) {
    if (a.number > b.number) {
      return -1;
    }
    if (a.number < b.number) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  handleChange(e) {
    this.setState({ newTodoText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newTodoText.length === 0) {
      return;
    }
    const newItem = {
      title: this.state.newTodoText,
      priority: 1,
      id: Date.now(),
      number: this.state.toDoItems.length + 1
    };
    // Add new item, then sort
    let sortedList = this.state.toDoItems.concat(newItem);
    sortedList.sort(this.compareFnDesc);
    // Set new state: sorted to_do array + empty text for input box
    this.setState(state => ({
      toDoItems: sortedList,
      newTodoText: ''
    }));
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="ToDo-Window">
          <div className='ToDo-Window-Left-Column'>
            <div className='App-Logo-Row'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='Category-Row'>
              Category 1
            </div>
            <div className='Category-Row'>
              Category 2
            </div>
          </div>
          <div className='ToDo-Window-Right-Column'>
            <ToDoList />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
