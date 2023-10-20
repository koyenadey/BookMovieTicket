 const Movies = [
    {
        id: "M001",
        url:"https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1696407863.jpg",
        coverurl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mission-impossible-dead-reckoning--part-one-et00329481-1688284554.jpg",
        title:"Mission Impossible: Dead Reckoning - Part One",
        name:"mission-impossible-dead-recckoning-part-one",
        genre: "Action/Adventure/Thriller",
        caution: "UA",
        duration: "2h 45m"
    },
    {
        id: "M002",
        url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/oppenheimer-et00347867-1683533414.jpg",
        coverurl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/oppenheimer-et00347867-1683533414.jpg",
        title:"Oppenheimer",
        name:"oppenheimer",
        genre:"Biography/Drama/Historical",
        caution: "A",
        duration:"3h 10m"
    },
    {
        id: "M003",
        url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/satyaprem-ki-katha-et00338378-1684751310.jpg",
        coverurl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/satyaprem-ki-katha-et00338378-1684751310.jpg",
        title: "Satyaprem Ki Katha",
        name:"satyaprem-ki-katha",
        genre:"Drama/Musical/Romance",
        caution: "UA",
        duration: "2h 26m"
    },
    {
        id: "M004",
        url:"https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/insidious-the-red-door-et00357727-1690965639.jpg",
        coverurl:"https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/insidious-the-red-door-et00357727-1690965639.jpg",
        title: "Insidious: The Red Door",
        name: "insidious-the-red-door",
        genre:"Horror/Mystery/Thriller",
        caution: "UA",
        duration: "1h 47m"
    },
    {
        id: "M005",
        url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/biye-bibhrat-et00364149-1689249555.jpg",
        coverurl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/biye-bibhrat-et00364149-1689249555.jpg",
        title: "Biye Bibhrat",
        name: "biye-bibhrat",
        genre:"Comedy/Romantic",
        caution: "UA",
        duration:"1h 28m"
    },
    {
        id: "M006",
        url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ardhangini-et00359220-1683697967.jpg",
        coverurl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ardhangini-et00359220-1683697967.jpg",
        title: "Ardhangini",
        name: "ardhangini",
        genre:"Drama/Family",
        caution: "UA",
        duration: "2h 15m"
    }
];

const getAllMovies=()=>{
    return Movies;
}

const getMovie = (id) =>{
    const movie = Movies.filter(movie=>movie.id === id);
    return movie[0];
}

export default{
    getAllMovies,
    getMovie
};
