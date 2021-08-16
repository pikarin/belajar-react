import React, {useState} from 'react'

function HeroList({ onUpdateHeroes, heroes = [] }) {
  const [hero, setHero] = useState('')

  const handleChange = (event) => {
    setHero(event.target.value)
  }

  const handleAddHero = (event) => {
    event.preventDefault()

    if (heroes.includes(hero) || !hero) {
      return
    }

    onUpdateHeroes([...heroes, hero])

    setHero('')
  }

  const handleRemoveHero = (name) => {
    onUpdateHeroes(heroes.filter((hero) => hero !== name))
  }

  return (
    <div className="w-full lg:w-2/4 xl:w-1/4">
      <div className="px-4 py-2 bg-indigo-500 text-white rounded shadow-md transition duration-200">
        <ul className="space-y-3">
          {heroes.map((name, i) => (
            <li key={i} className="flex items-center justify-between">
              <span>{name}</span>
              <button onClick={() => handleRemoveHero(name)} type="button">
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <form className="mt-4" onSubmit={handleAddHero}>
        <input
          value={hero}
          onChange={handleChange}
          className="px-4 py-2 block w-full border rounded bg-gray-100 focus:shadow-md focus:outline-none focus:border-indigo-300 text-gray-900"
          type="text"
          placeholder="Masukkan nama super hero di sini"
        />
        <button
          className="px-4 py-2 mt-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
          type="submit"
        >
          Tambah
        </button>
      </form>
    </div>
  )
}

export default HeroList