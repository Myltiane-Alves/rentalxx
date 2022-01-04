import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute ({ email, password}: IRequest): Promise<IResponse> {
        // Usuário existe
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        // Senha está correta
        if(!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }
        
        // Gerar jsonwebtoken
        const token = sign({}, "7b8335b8b7215d216a2b7e23108fdbc7", {
            subject: user.id,
            expiresIn: "1d",
        });
        
        const tokenReturn: IResponse = {
            token, 
            user: {
               name: user.name,
               email: user.email, 
            }
            
        }    

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };