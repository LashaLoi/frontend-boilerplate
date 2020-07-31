import React, { useState, useCallback } from "react"
import styled from "styled-components"

import { useLocalStorage } from "./hooks/useLocalStorage"

const Container = styled.div`
  background: linear-gradient(20deg, hsl(0, 60%, 65%), hsl(-305, 64%, 60%));

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  color: white;
`

const Button = styled.button`
  height: 50px;
  width: 100px;
  font-size: 30px;
  cursor: pointer;
`

const Paragraph = styled.p`
  margin: 0 30px;
  font-size: 40px;
`

export const App: React.FC = () => {
  const { getItem, setItem } = useLocalStorage()
  const state = getItem("count")

  const [count, setCount] = useState<number>(state ? +state : 0)

  const handlePlus = useCallback(
    () =>
      setCount(count => {
        const newState = count + 1
        setItem("count", newState)

        return newState
      }),
    []
  )

  const handleMinus = useCallback(
    () =>
      setCount(count => {
        const newState = count - 1
        setItem("count", newState)

        return newState
      }),
    []
  )

  return (
    <Container>
      <Button onClick={handleMinus}>-</Button>
      <Paragraph>Count: {count}</Paragraph>
      <Button onClick={handlePlus}>+</Button>
    </Container>
  )
}
