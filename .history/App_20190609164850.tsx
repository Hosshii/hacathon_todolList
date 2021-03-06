import React, { Component } from 'react';
import { get } from './axios';

interface Props {}
interface State {
  todos: Todo[];
  value: string;
}

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    get()
      .then(result => {})
      .catch(err => {});
    this.setState({ todos: task });
  }

  render() {
    return (
      <div>
        <div className="todoList">
          <div className="title">TODO LIST</div>
          <div className="contents">
            <table>
              <tbody>
                <tr>
                  <th>完了</th>
                  <th>未完了</th>
                </tr>

                {this.state.todos.map((todo, i) => {
                  return (
                    <tr key={i}>
                      <td>{todo.content}</td>
                      <td />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="computeTaskWrapper">
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button
              className="btn"
              onClick={() => {
                this.addTaskHandler();
              }}
            >
              add Task!
            </button>
          </div>
        </div>
      </div>
    );
  }
  addTaskHandler() {
    if (this.state.value != '') {
      this.setState(state => {
        return { todos: [...state.todos, { id: '', content: this.state.value, createdAt: '' }] };
      });
      this.setState({ value: '' });
    }
  }
  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
}
