import { useState } from 'preact/hooks'
import './app.css'
import '@picocss/pico'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
        <nav>
            <ul>
                <li><strong>Brand</strong></li>
            </ul>
            <ul>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#" role="button">Button</a></li>
            </ul>
        </nav>
        </header>

        <main>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
        </main>

        <footer>
            <p>
                <a href="#">Link</a> | <a href="#">Link</a> | <a href="#">Link</a>
            </p>
        </footer>
    </>
  )
}
