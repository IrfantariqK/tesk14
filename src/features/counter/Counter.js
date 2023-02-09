import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount } from './counterSlice'


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          disables={(count < 6) }
          
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(-5))}
          disabled={(count - 5) < 0 ? true : false}
          
        >
          Decrement
        </button>
      </div>
    </div>
  )
}