import { Address } from './address';

export class User{
    constructor(
        public email: string,
        public password: string,
        public address: Address
    ){}
}