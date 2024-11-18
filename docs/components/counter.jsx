import { useState } from 'preact/hooks'
import styles from './counter.module.css'

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button
      class={styles.buttonStyle}
      onClick={() => {
        setCount(count + 1)
      }}
    >
      {count}
    </button>
  )
}
