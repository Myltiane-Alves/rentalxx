import { IRentalRepository } from "@modules/rentals/repositores/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: string;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalRepository) {} ;

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<void> {

    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError("Car is unavailable");
    }

    const rentalOpentToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (rentalOpentToUser) {
      throw new AppError("There's a rental in progress for user!");
    }
  }
}

export { CreateRentalUseCase };
