const BoxOfficeList = [
    {
        id:"M001",
        tickets: 300,
        liked: 250,
        rating:[4,4.5,5,4.8],
        theatre:['Hindi 2D','English-2D','English - IMAX-2D'],
        price: ['0-100','101-200','201-300','301-400','401-500']
    },
    {
        id:"M002",
        tickets: 300,
        liked: 220,
        rating:[4,4.2,4.5,4.8],
        theatre:['Hindi 2D','English-2D','English - IMAX-2D'],
        price: ['0-100','101-200','201-300','301-400','401-500','501-600','601-700']
    },
    {
        id:"M003",
        tickets: 100,
        liked: 47,
        rating:[3,1,2,4],
        theatre:['Hindi 2D','English-2D','Hindi - IMAX-2D'],
        price: ['0-100','101-200','201-300','301-400']
    },
    {
        id:"M004",
        tickets: 300,
        liked: 250,
        rating:[4,4.6,2,0,4.2],
        theatre:['Hindi 2D','English-2D','English - IMAX-2D'],
        price: ['0-100','101-200','201-300','301-400','401-500']
    },
    {
        id:"M005",
        tickets: 100,
        liked: 68,
        rating:[4,4.6,5,3,4,1],
        theatre:['Hindi 2D','Bengali 2D','English-2D','Bengali - IMAX-2D'],
        price: ['0-100','101-200','201-300','301-400','401-500']
    },
    {
        id:"M006",
        tickets: 100,
        liked: 78,
        rating:[4,4.6,5,4.9,4.5],
        theatre:['Hindi 2D','Bengali 2D','English-2D','Bengali - IMAX-2D'],
        price: ['0-100','101-200','201-300','301-400','401-500']
    },
]

const getMovieBoxOfficeData=(id)=>{
    const movie = BoxOfficeList.find(movie=>movie.id === id);
    return movie;
}

const updateMovieLikeCount = (id,count) =>{
    const movie = BoxOfficeList.find(movie=>movie.id === id);
    if(movie)
    {
        movie.liked += +count;
    }
}
const updateMovieRatings = (id,rating) =>{
    let average = 0;
    const movie = BoxOfficeList.find(movie=>movie.id === id);
    if(movie)
    {
        movie.rating.push(rating);
        average = calculateRatings(movie.rating);       
    }
    return average;
}

const getMovieRating = (id) =>{
    let rating = 0;
    const movie = BoxOfficeList.find(movie=>movie.id === id);
    if(movie)
        rating = calculateRatings(movie.rating);

    return rating;
}

const calculateRatings = (ratingsArr) =>{
    const totalRates = ratingsArr.length;
    const average = (ratingsArr.reduce((accumulator,current)=> accumulator + current)) / totalRates;
    return Math.round(average);
}

export default{
    getMovieBoxOfficeData,
    updateMovieLikeCount,
    updateMovieRatings,
    getMovieRating 
}