import styles from './SearchItem.module.css'
export default function SearchItem({ pageid, title, snippet, setFavouriteArticles, isFavourite }) {
    const addToFavourite = () => {
        setFavouriteArticles(prev => [...prev, { pageid, title, snippet }])
    }

    const RemoveFromFavourite = () => {
        setFavouriteArticles(prev => prev.filter(item => item.pageid !== pageid))
    }

    return (
        <div className={styles.results}>
            <h2>{title}</h2>
            <div className={styles.snip} dangerouslySetInnerHTML={{ __html: snippet }}></div>
            <div className='btns-row'>
                <a className={styles.aa} href={`https://en.wikipedia.org/?curid=${pageid}`} target='_blank'>Read More</a>
                {
                    isFavourite ? <button className={styles.btn} onClick={RemoveFromFavourite}>Remove From Favourites</button>
                    : <button className={styles.btn} onClick={addToFavourite}>Add To Favourites</button>
                }
            </div>
        </div>
    )
}
