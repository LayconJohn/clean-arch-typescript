import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case";

describe("Create Route Usecase", () => {
    it("Should create a new route", async () => {
        const repository = new RouteInMemoryRepository();
        const createUsecase = new CreateRouteUseCase(repository);
        const output = await createUsecase.execute({
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
        });

        expect(repository.items).toHaveLength(1);
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
            points: []
        })
        

    });
});