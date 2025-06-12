import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { notificationAtom, jobsAtom, messageAtom, networkAtom, totalNotificationAtom } from './atom';
import {RecoilRoot, useRecoilValue} from 'recoil';
function App() {
  return <div>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  </div>

}

function MainApp() {
  const jobCount = useRecoilValue(jobsAtom)
  const NotificationCount = useRecoilValue(notificationAtom)
  const messageCount = useRecoilValue(messageAtom)
  const NetworkCount = useRecoilValue(networkAtom)
  
  const totalNotificationCount = useRecoilValue(totalNotificationAtom)

  return (
    <>
      <button>Home</button>

      <button>My Network ({NetworkCount})</button>
      <button>Messages ({messageCount}) </button>
      <button>Jobs ({jobCount}) </button>
      <button>Notifications ({NotificationCount > 99 ? "99+" : NotificationCount }) </button>
      
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
