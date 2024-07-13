import { type MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Text } from '../../ui';

export const Generator = () => {
  // const state = useState(uuidv4());
  // na indeksie 0 będzie id, a na indeksie  1 będzie setId
  const [id, setId] = useState(uuidv4());

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    // id = uuidv4();
    // state[1](uuidv4());  // na pozycji pierwszej znajduje się funkcja do zmiany tej wartości
    setId(uuidv4());
  }

  const handleDivClick: MouseEventHandler<HTMLDivElement> = () => {
   // setId(uuidv4());
   console.log('div click!')
  }

  // state[0] - na pozycji 0 znajduje się wartość

  return (
    <div onClick={handleDivClick}>
      <Text>
        {id}
      </Text>
      <Button label="Refresh" onClick={handleClick}></Button>
    </div>
  );
}