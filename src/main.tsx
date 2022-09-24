import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import './index.css'
import { MakeApp } from './main/factories/presentation/app/app-factory'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <MakeApp />
    </RecoilRoot>
  </React.StrictMode>
)
