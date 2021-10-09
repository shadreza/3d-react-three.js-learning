import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const CanvasContainer = styled.div`
  width  : 100%;
  height : 100%;    
`;

function App() {
  return (
    <CanvasContainer> 
      <Canvas>
        <Suspense fallback={null}>

        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
