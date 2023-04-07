import { Card, Input } from 'antd'
import { useState } from 'react'

export function RoomSearch(): JSX.Element {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Card
      className='room-search'
      size='small'
    >
      <Input
        type='text'
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </Card>
  )
}
