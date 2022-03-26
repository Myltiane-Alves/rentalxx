import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
  beforeEach(() => {
    createRentalUseCase = new CreateRentalUseCase();
  });

  it("should create a new rental", async () => {

    await createRentalUseCase.execute();
  });

})
