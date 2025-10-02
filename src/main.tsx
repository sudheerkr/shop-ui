import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// const onRender = (id: string, phase: string, actualDuration: number, baseDuration: number, startTime: number, commitTime: number) => {
//   console.log(`component id ${id}`);
//   console.log(`component phase ${phase}`);
//   console.log(`component actualDuration ${actualDuration}`);
//   console.log(`component baseDuration ${baseDuration}`);
//   console.log(`component startTime ${startTime}`);
//   console.log(`component commitTime ${commitTime}`);
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Profiler id='App' onRender={onRender}> */}
      <App />
    {/* </Profiler> */}
  </StrictMode>,
)
