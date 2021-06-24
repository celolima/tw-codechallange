### Used Commands

git init  
code .gitignore  
echo /node_modules > .gitignore  
npm init -y  
npm install -D ts-node-dev typescript jest @types/jest ts-jest  
npx ts-jest config:init  
npx typescript --init

## Entities

Hotel
ClientType
DayType
PlanHotel

## UseCases

ReservationHotel
createChepeastHotel(clientType, days[])

## Test

ReservationHotel.test.ts

## Repositories Interface

IPlanHotelRepository.ts