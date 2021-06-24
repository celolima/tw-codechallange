import { ClientType } from "../entities/ClientType";
import { DayType } from "../entities/DayType";
import Hotel from "../entities/Hotel";
import PlanHotel from "../entities/PlanHotel";

export default interface IPlanHotelRepository {

    getPlans(): PlanHotel[];
    getPlansByClientType(clientType: ClientType): PlanHotel[];
    getPlansByDayType(dayType: DayType): PlanHotel[];
    getClientsType(): string[];
    getHotels(): Hotel[];
}