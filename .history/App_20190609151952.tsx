import React, { Component } from 'react';

interface Props {}
interface State {
  todos: Todo[];
}

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { todos: [{ id: '', content: 'aaa', createdAt: '' }, { id: '', content: 'bbb', createdAt: '' }] };
  }

  render() {
    return (
      <div>
        <div className="todoList">
          <div className="title">TODO LIST</div>
          <div className="contents">
            <table>
              {/* <tr>
                <th>完了</th>
                <th>未完了</th>
              </tr> */}
              <tr>
                {this.state.todos.map(todo => {
                  return (
                    <tr>
                      <td>{todo.content}</td>
                    </tr>
                  );
                })}
              </tr>
            </table>
          </div>
          <div className="computeTaskWrapper">
            <input type="text" value={this.state./>
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
    let content = document.getElementById('addTask');
    this.state.todos.push({ id: '', content: content });
  }
}
