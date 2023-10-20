const seats = [
    {
        type: "Classic",
        seatRange: 60,
        seatCountInEachRow: 10,
        price: 100,
    },
    {
        type: "Silver",
        seatRange: 40,
        seatCountInEachRow: 10,
        price: 250,
    },
    {
        type: "Gold",
        seatRange: 20,
        seatCountInEachRow: 10,
        price: 300,
    },
    {
        type: "Prime",
        seatRange: 10,
        seatCountInEachRow: 10,
        price: 400,
    }
]

const getAllSeatDetails = () =>{
    return seats;
}

const getSeatDetails = () =>{
    const revisedSeats = [];
    seats.forEach((layout)=>{
        const type = layout.type;
        const totalSeats = layout.seatRange;
        const seatsPerRow = layout.seatCountInEachRow;
        const totalRows = (totalSeats / seatsPerRow);
        const seatDetails = {
            seatType: type,
            price: layout.price,
            seatLayout: getRevisedSeats(totalRows,seatsPerRow),
        };
        revisedSeats.push(seatDetails);        
    });
    return revisedSeats;
}

const getRevisedSeats = (totalRows,seatsPerRow) =>{
    const revisedSeats = [];
    let letter = "A";
    for(let i = 0;i < totalRows;i++)
    {
        for(let j=1;j<=seatsPerRow;j++)
        {
            revisedSeats.push(letter+j);
        }
        letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    return revisedSeats;
}

export default{
    getSeatDetails
}