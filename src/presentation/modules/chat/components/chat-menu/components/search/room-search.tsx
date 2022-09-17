import { useState } from 'react'
import './room-search.css'

export function RoomSearch(): JSX.Element {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='chat-menu-search'>
      <input
        type='text'
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </div>
  )
}
