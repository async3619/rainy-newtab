import styled from '@emotion/styled'

export const Root = styled.div`
  display: flex;
  flex-direction: column;

  user-select: none;
`

export const Date = styled.span`
  display: block;

  font-size: 28px;
  font-family: 'Azeret Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  text-align: center;

  color: rgba(255, 255, 255, 0.5);
`

export const Weather = styled(Date)`
  margin-top: 8px;

  font-size: 18px;
`

export const Time = styled.span`
  display: block;

  font-size: 94px;
  font-family: 'Azeret Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  color: rgba(255, 255, 255, 0.75);
`
