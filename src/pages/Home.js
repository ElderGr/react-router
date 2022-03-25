import React from 'react';
import { useNavigate } from 'react-router-dom'
// import { Container } from './styles';

function Home() {
    const navigation = useNavigate()

    const handleButton = () => {
        navigation(`about`, { 
            state: { name: `eeee` }
         })
    }

  return (
    <div>
      home
      <button onClick={handleButton}>
          Meu botao
      </button>
    </div>
  );
}

export default Home;