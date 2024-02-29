import { LatLong } from "../domain/route.entity";
import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";

export class ListAllRoutesUseCase {
    constructor(private routeRepo: RouteInMemoryRepository) {}

    async execute(): Promise<ListAllRoutesOutput>{
        const routes = await this.routeRepo.findAll()
        return routes.map(r => r.toJSON())
    }
}

type ListAllRoutesOutput = {
    title: string;
    startPosition: LatLong;
    endPosition: LatLong;
    points?: LatLong[];
}[];