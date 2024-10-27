import React from 'react'

import * as Styled from './IconTab.styled'

export interface IconTabItem<TValue extends string> {
  value: TValue
  icon: React.ComponentType
}

interface IconTabProps<TValue extends string> {
  value: TValue
  onChange: (value: TValue) => void
  items: IconTabItem<TValue>[]
}

function IconTab<TValue extends string>({
  value: currentValue,
  items,
  onChange,
}: IconTabProps<TValue>) {
  return (
    <Styled.Root>
      {items.map(({ icon: Icon, value }) => (
        <Styled.Item
          key={value}
          onClick={() => onChange(value)}
          selected={value === currentValue}
        >
          <Icon />
        </Styled.Item>
      ))}
    </Styled.Root>
  )
}

export default IconTab
