import { useEffect, useState } from 'react'

import dayjs from 'dayjs'

import useAppStore from '@stores/app'

import * as Styled from './Clock.styled'

function Clock() {
  const [time, setTime] = useState(() => dayjs())
  const weather = useAppStore((store) => store.weather?.weather)

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
      <Styled.Time>{time.format('HH·mm·ss')}</Styled.Time>
      <Styled.Date>{time.format('YYYY·MM·DD')}</Styled.Date>
      {weather && (
        <Styled.Weather>
          {weather.weatherName} {Math.round(weather.temperature * 10) / 10}°C
        </Styled.Weather>
      )}
    </Styled.Root>
  )
}

export default Clock
