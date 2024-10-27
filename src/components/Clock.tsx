import { useEffect, useState } from 'react'

import dayjs from 'dayjs'

import * as Styled from './Clock.styled'

function Clock() {
  const [time, setTime] = useState(() => dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Styled.Root>
      <Styled.Clock>{time.format('HH·mm·ss')}</Styled.Clock>
      <Styled.Date>{time.format('YYYY·MM·DD')}</Styled.Date>
    </Styled.Root>
  )
}

export default Clock
