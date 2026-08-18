import { faker } from '@faker-js/faker';

export class DataGenerator {
  static generateContactInfo() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      message: faker.lorem.paragraph(),
    };
  }
}
