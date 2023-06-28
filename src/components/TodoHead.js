import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding: 32px;
  border-bottom: 1px solid #e9ecef;
  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 16px;
  }
  .tasks-left {
    color: #ff9900;
    font-size: 16px;
    font-weight: bold;
    margin-top: 40px;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const unDoneTasks = todos.filter(todo => !todo.isDone);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <p>{dateString}</p>
      <div className="day">{dayName}</div>
      <div className="tasks-left">남은 Misson: {unDoneTasks.length}개!</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;