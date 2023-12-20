import style from './SearchInput.module.css'
export default function SearchInput({ searchQuery, setSearchQuery }) {
    return (
        <div className={style.big}>
  <input className={style.ine}
            type='text'
            placeholder='Enter anything to search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
      
    )
}
