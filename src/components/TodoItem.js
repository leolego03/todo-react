import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ff9900;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  color: #ff9900;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Text = styled.div`
  font-size: 16px;
  color: #495057;
  /* color: #ced4da; */
`;

function TodoItem({ id, title, content, isDone }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle}>
        {isDone && <MdDone />}
      </CheckCircle>
      <TextContainer>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </TextContainer>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;