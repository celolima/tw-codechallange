import IBestHotel from "../dto/IBestHotel";
import ClientType from "../entities/ClientType";
import DayType from "../entities/DayType";

import Hotel from "../entities/Hotel";
import PlanHotel from "../entities/PlanHotel";
import IPlanHotelRepository from "../repositories/IPlanHotelRepository";

export default class ReservationHotel {

    private hotelPrice: Map<Hotel, number>;

    constructor(private repository: IPlanHotelRepository) {
        this.hotelPrice = new Map<Hotel, number>();
     }

    exec(type: string, days: string[]): IBestHotel {       
        if(!(type.toUpperCase() in ClientType)) {
            throw new Error('Valor inválido para o tipo de cliente');
        }
        if(!days || days.length === 0) {
            throw new Error('Valor inválido da datas');
        }
        const clientType = (<any>ClientType)[type.toUpperCase()] as ClientType;
        return this.getBestMatch(clientType, days);
    }

    getBestMatch(clientType: ClientType, days: string[]): IBestHotel {
        const plansOfClient = this.repository.getPlansByClientType(clientType);

        days.forEach(day => {
            let type = this.getDayTypeByDate(day);
            let plansOfDayType = plansOfClient.filter(p => p.dayType === type);
            plansOfDayType.forEach(plan => this.addHotelPrice(plan));
        });

        return this.getChepeastHotel();
    }

    getDayTypeByDate(day: string): DayType {

        if(day.includes('sat') || day.includes('sun')) {
            return DayType.WEEKEND;
        }

        return DayType.WEEK;
    }

    addHotelPrice(planHotel: PlanHotel): void {
        let price = 0;
        if(this.hotelPrice.has(planHotel.hotel)) {
            price = this.hotelPrice.get(planHotel.hotel)!;
        }
        this.hotelPrice.set(planHotel.hotel, price + planHotel.price);
    }

    getChepeastHotel(): IBestHotel {               
        let lowestHotel!: Hotel;
        let lowestPrice = Infinity;
        let rating = 0;

        for (let [hotel, price] of this.hotelPrice) {
            if (lowestPrice >= price 
                && hotel.rating > rating) {                    
                lowestHotel = hotel;
                lowestPrice = price;
            }
        }
        return {hotel: lowestHotel.name, price: lowestPrice} as IBestHotel;
    }

}