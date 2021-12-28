import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUserCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({
        name,
       
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name,
       
            email,
            password,
            driver_license,
        });
    }
}

export { CreateUserUserCase }