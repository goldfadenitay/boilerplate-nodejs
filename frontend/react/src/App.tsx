import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const message = 'Welcome to React + TypeScript'

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          {message}
        </h1>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-xl mb-4">Count is: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
