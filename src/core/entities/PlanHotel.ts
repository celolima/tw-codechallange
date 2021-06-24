import ClientType from "./ClientType";
import DayType from "./DayType";
import Hotel from "./Hotel";

export default class PlanHotel {
    
    hotel: Hotel;
    price: number;
    clientType: ClientType;
    dayType: DayType;
    
    constructor(private id: number, hotel: Hotel,
                price: number,
                clientType: ClientType,
                dayType :DayType) {
        this.id = id;
        this.hotel = hotel;
        this.price = price;
        this.clientType = clientType;
        this.dayType = dayType;
    }
}