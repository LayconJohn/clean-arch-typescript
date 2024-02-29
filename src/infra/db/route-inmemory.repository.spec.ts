import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe("Route in memory repository", () => {
    it("should insert a new route", async () => {
        const repository = new RouteInMemoryRepository();

        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
        }

        const route = new Route(routeProps);

        await repository.insert(route);

        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route]);
    });
});