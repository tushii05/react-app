export const SeriesCard = ({ data }) => {
    // Destructure data properties
    const { id, img_url, name, rating, description, genre, watch_url } = data;

    return (
        <li key={id}>
            <div>
                <img src={img_url} alt={`${name} Thumbnail`} width="30%" height="30%" />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>{description}</p>
            <p>Genre: {genre}</p>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button>
            </a>
        </li>
    );
};
