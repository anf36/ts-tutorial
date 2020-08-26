import React from 'react';

type GreetingsProps = {
  name: string;
  mark: any;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 하지 않는 함수
};

function Greeting({name, mark, optional, onClick}: GreetingsProps){
  const handleClick = () => onClick(name);
  return (
  <div> Hello , {name} {mark} {optional && <p>{optional}</p>}
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  </div>
  );
}

Greeting.defaultProps = {
  mark: '!'
};

export default Greeting;