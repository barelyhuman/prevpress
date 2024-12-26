import { useState } from 'preact/hooks'

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button
      class="bg-red-100"
      onClick={() => {
        setCount(count + 1)
      }}
    >
      {count}
    </button>
  )
}
