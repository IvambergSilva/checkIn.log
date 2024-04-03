import { faker } from '@faker-js/faker'
export const attendees = Array.from({ length: 203 }).map(() => {
    return {
        id: faker.number.int({ min: 5000, max: 10000 }),
        name: faker.name.fullName(),
        email: faker.internet.email().toLowerCase(),
        createdAt: faker.date.recent({ days: 20 }),
        checkInAt: faker.date.recent({ days: 2 })
    }
}) 