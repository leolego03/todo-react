import { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const InsertFormPositioner = styled.div`
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f5f5f5;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-top: 10px;
  background: #ffb700;
  &:hover {
    background: #ffc800;
  }
  &:active {
    background: #ff9900;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: center;
  font-size: 16px;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
`

function TodoCreate() {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    nextId.current += 1;
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={onSubmit}>
          <Input
            autoFocus
            placeholder="제목을 입력하세요"
            onChange={onChange}
            value={value}
          />
          <Button type="submit">
            추가하기
          </Button>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
}

export default TodoCreate;