import ClientType from "../../core/entities/ClientType";
import DayType from "../../core/entities/DayType";
import Hotel from "../../core/entities/Hotel";
import PlanHotel from "../../core/entities/PlanHotel";
import IPlanHotelRepository from "../../core/repositories/IPlanHotelRepository";

export default class PlanHotelRepositoryMemory implements IPlanHotelRepository {

    getPlans(): PlanHotel[] {
        return plans;
    }

    getPlansByClientType(clientType: ClientType): PlanHotel[] {
        return plans.filter(p => p.clientType === clientType);
    }

    getPlansByDayType(dayType: DayType): PlanHotel[] {
        return plans.filter(p => p.dayType === dayType);
    }

    getClientsType(): string[] {
        return [ClientType.FIDELIDADE,ClientType.FIDELIDADE];
    }

    getHotels(): Hotel[] {
        return hotels;
    }

}

const parqueDasFloresHotel = new Hotel(1,'Parque das Flores',3);
const jardimBotanicoHotel = new Hotel(2,'Jardim Botânico',4);
const marAtlanticoHotel = new Hotel(3,'Mar Atlântico',5);

const hotels = [parqueDasFloresHotel, jardimBotanicoHotel, marAtlanticoHotel];

const parqueDasFloresWeekRegularPlan = new PlanHotel(1,parqueDasFloresHotel,110,ClientType.REGULAR,DayType.WEEK);
const parqueDasFloresWeekFidelidadePlan = new PlanHotel(2,parqueDasFloresHotel,80,ClientType.FIDELIDADE,DayType.WEEK);

const parqueDasFloresWeekendRegularPlan = new PlanHotel(3,parqueDasFloresHotel,90,ClientType.REGULAR,DayType.WEEKEND);
const parqueDasFloresWeekendFidelidadePlan = new PlanHotel(4,parqueDasFloresHotel,80,ClientType.FIDELIDADE,DayType.WEEKEND);

const jardimBotanicoWeekRegularPlan = new PlanHotel(5,jardimBotanicoHotel,160,ClientType.REGULAR,DayType.WEEK);
const jardimBotanicoWeekFidelidadePlan = new PlanHotel(6,jardimBotanicoHotel,110,ClientType.FIDELIDADE,DayType.WEEK);

const jardimBotanicoWeekendRegularPlan = new PlanHotel(7,jardimBotanicoHotel,60,ClientType.REGULAR,DayType.WEEKEND);
const jardimBotanicoWeekendFidelidadePlan = new PlanHotel(8,jardimBotanicoHotel,50,ClientType.FIDELIDADE,DayType.WEEKEND);

const marAtlanticoWeekRegularPlan = new PlanHotel(9,marAtlanticoHotel,220,ClientType.REGULAR,DayType.WEEK);
const marAtlanticoWeekFidelidadePlan = new PlanHotel(10,marAtlanticoHotel,100,ClientType.FIDELIDADE,DayType.WEEK);

const marAtlanticoWeekendRegularPlan = new PlanHotel(11,marAtlanticoHotel,150,ClientType.REGULAR,DayType.WEEKEND);
const marAtlanticoWeekendFidelidadePlan = new PlanHotel(12,marAtlanticoHotel,40,ClientType.FIDELIDADE,DayType.WEEKEND);

const plans = [
    parqueDasFloresWeekRegularPlan,
    parqueDasFloresWeekFidelidadePlan,
    parqueDasFloresWeekendRegularPlan,
    parqueDasFloresWeekendFidelidadePlan,
    jardimBotanicoWeekRegularPlan,
    jardimBotanicoWeekFidelidadePlan,
    jardimBotanicoWeekendRegularPlan,
    jardimBotanicoWeekendFidelidadePlan,
    marAtlanticoWeekRegularPlan,
    marAtlanticoWeekFidelidadePlan,
    marAtlanticoWeekendRegularPlan,
    marAtlanticoWeekendFidelidadePlan
]