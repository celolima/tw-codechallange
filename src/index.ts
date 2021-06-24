import ReservationHotel from "./core/usecases/ReservationHotel";
import PlanHotelRepositoryMemory from "./infra/database/PlanHotelRepositoryMemory";

const repo = new PlanHotelRepositoryMemory();
const reservationHotel = new ReservationHotel(repo);
const days = [new Date(2021,5,23),new Date(2021,5,24),new Date(2021,5,25),new Date(2021,5,26)];

const dayAsString = ['16Mar2020(mon)', '17Mar2020(tues)', '18Mar2020(wed)'];
const hotel = reservationHotel.exec('Regular',dayAsString);
console.log(hotel);