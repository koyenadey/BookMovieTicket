const HallsList = [
    {
        hallName: "Nazrultirtha Cinema",
        mobileTicket: "Yes",
        beverages: "Food and beverages",
        timings:["10:00 AM","12:00 PM","14:00 PM","16:30 PM"],
        baseAmount: 60,
        seats:{
            Classic:["A5","A6","B4","B5","C9","C10"],
            Silver:["A2","A3","C1","C2"],
            Gold:["A5","A6"],
            Prime:["A4","A5"]
        }
    },
    {
        hallName: "PVR Cinema",
        mobileTicket: "Yes",
        beverages: "Food and beverages",
        timings:["10:00 AM","12:00 PM","14:00 PM","16:30 PM","18:00 PM"],
        baseAmount: 75,
        seats:{
            Classic:["A1","B14","B20","C2","C3","D1","D2","F4","F5"],
            Silver:["D8","D10"],
            Gold:[],
            Prime:[]
        }
    },
    {
        hallName: "INOX Cinema",
        mobileTicket: "Yes",
        beverages: "Food and beverages",
        timings:["10:00 AM","12:00 PM","14:00 PM","16:30 PM","19:00 PM","20:00 PM"],
        baseAmount: 80,
        seats:{
            Classic:["A5","A6","B4","B5","C9","C10","D1","D2","D3","D4","D5","D6"],
            Silver:["D8","D10"],
            Gold:["A5"],
            Prime:[]
        }
    },
    {
        hallName: "INOX Forum",
        mobileTicket: "Yes",
        beverages: "Food and beverages",
        timings:["10:00 AM","14:00 PM","19:00 PM","20:00 PM"],
        baseAmount: 85,
        seats:{
            Classic:["A5","A6","B14","B15","C29","C30","D1","D2","D3","D4","D5","D6"],
            Silver:["C5","C6","C1","C2","C9","C10"],
            Gold:["A10"],
            Prime:[]
        }
    }
];

const getAllDetails = () =>{
    return HallsList;
}

export default{
    getAllDetails
}