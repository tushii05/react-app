import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"
const NetflixApp = () => {
    return (
        <>
            <ul>
                {seriesData.map((curElem) => (
                    <SeriesCard key={curElem.id} data={curElem} />
                ))}
            </ul>
        </>
    )
}

export default NetflixApp;
