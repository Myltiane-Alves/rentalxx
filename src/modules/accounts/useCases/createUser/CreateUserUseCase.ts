import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject } from "tsyringe";


class CreateUserUserCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({
        name,
        username,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name,
            username,
            email,
            password,
            driver_license,
        });
    }
}

export { CreateUserUserCase }