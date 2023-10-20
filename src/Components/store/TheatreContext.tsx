import React,{FC,ReactNode,createContext,useState} from 'react';

interface TheatreProviderProps {
    children: ReactNode;
  }

type theatreDetails={
    hallName: string;
    moviename: string;
    timings: string;
    baseAmount: number;
    seats: {
      Classic: string[];
      Silver: string[];
      Gold: string[];
      Prime: string[];
    },
    selectedSeats:[{seat:string,category:string}]; 
    totalTicketPrice: number;   
  };

  
export const theatreContextData = createContext<{theatreData:theatreDetails|undefined,setTheatreData:(data:any)=>void}>({
    theatreData: undefined,
    setTheatreData:()=>{}
});


const TheatreContext:FC<TheatreProviderProps> = ({children}) =>{
    const [selectedTheatre,setSelectedTheatre] = useState<theatreDetails|undefined>(undefined);   
    //console.log(selectedTheatre);
    return(
        <theatreContextData.Provider value={{theatreData:selectedTheatre,setTheatreData:setSelectedTheatre}}>
            {children}
        </theatreContextData.Provider>
    );
}

export default TheatreContext;