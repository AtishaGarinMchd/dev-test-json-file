import Pet from './Pet';

export default interface Person {
  name: string,
  gender: string,
  age: string,
  pets: Pet[]
}