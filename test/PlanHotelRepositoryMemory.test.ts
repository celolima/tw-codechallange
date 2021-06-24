import ClientType from "../src/core/entities/ClientType";
import DayType from "../src/core/entities/DayType";
import PlanHotelRepositoryMemory from "../src/infra/database/PlanHotelRepositoryMemory";

describe('PlanHotel Repository Test', () => {

    const repo = new PlanHotelRepositoryMemory();

    it('should get 3 hotels', () => {
        expect(repo.getHotels().length).toBe(3);
    });

    it('should return 2 clients type', () => {
        expect(repo.getClientsType().length).toBe(2);
    });

    it('should get all types of plans', () => {
        expect(repo.getPlans().length).toBe(12);
    });

    it('should get only REGULAR plans', () => {
        expect(repo.getPlansByClientType(ClientType.REGULAR).length).toBe(6);
    });
    
    it('should get only WEEKEND plans', () => {
        expect(repo.getPlansByDayType(DayType.WEEKEND).length).toBe(6);
    });
    
});