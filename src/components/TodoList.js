import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #343a40;
  }
`;

function TodoList() {
  const todos = useTodoState();
  const doneTodos = todos.filter(todo => todo.isDone === true);
  const unDoneTodos = todos.filter(todo => todo.isDone === false);

  return (
    <>
      <TodoListBlock>
        <p>Done:</p>
        {doneTodos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            isDone={todo.isDone}
          />
        ))}
      </TodoListBlock>

      <TodoListBlock>
        <p>Working:</p>
        {unDoneTodos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            isDone={todo.isDone}
          />
        ))}
      </TodoListBlock>
    </>
  );
}

export default TodoList;