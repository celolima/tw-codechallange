import ClientType from "../src/core/entities/ClientType";
import ReservationHotel from "../src/core/usecases/ReservationHotel";
import PlanHotelRepositoryMemory from "../src/infra/database/PlanHotelRepositoryMemory";

describe('Reservation Test', () => {

    let repo: PlanHotelRepositoryMemory;
    let reservationHotel: ReservationHotel;

    beforeEach(() => {
        repo = new PlanHotelRepositoryMemory();
        reservationHotel = new ReservationHotel(repo);
    });

    it('should return Parque das flores hotel', () => {
        const days = ['16Mar2020(mon)', '17Mar2020(tues)', '18Mar2020(wed)'];
        const match = reservationHotel.exec(ClientType.REGULAR, days);
        expect(match.hotel).toBe('Parque das Flores');
    });

    it('should return Jardim Botânico hotel', () => {
        const days = ['20Mar2020(fri)', '21Mar2020(sat)', '22Mar2020(sun)'];
        const match = reservationHotel.exec(ClientType.REGULAR, days);
        expect(match.hotel).toBe('Jardim Botânico');
    });
    
    it('should return Mar Atlântico hotel', () => {
        const days = ['26Mar2020(thur)', '27Mar2020(fri)', '28Mar2020(sat)'];
        const match = reservationHotel.exec(ClientType.FIDELIDADE, days);
        expect(match.hotel).toBe('Mar Atlântico');
    });    
});