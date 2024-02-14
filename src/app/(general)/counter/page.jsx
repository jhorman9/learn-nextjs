import CounterCard from '@/component/counter/CounterCard';
import React from 'react'

const CounterPage = () => {
  return (
    <>
    <h1>CounterPage</h1>
    <CounterCard
      initialValue={1000}
      stepValue={1}
    />
    </>
  )
}

export default CounterPage;