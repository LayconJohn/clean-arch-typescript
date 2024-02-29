import { LatLong, Route } from "../domain/route.entity";
import { RouteReporitoryInterface } from "../domain/route.repository";

export class CreateRouteUseCase {
    constructor(private routeRepo: RouteReporitoryInterface){

    }

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput>{
        const route = new Route(input);
        await this.routeRepo.insert(route);
        return route.toJSON();
    }
}

type CreateRouteInput = {
    title: string;
    startPosition: LatLong;
    endPosition: LatLong;
    points?: LatLong[];
};

type CreateRouteOutput = {
    title: string;
    startPosition: LatLong;
    endPosition: LatLong;
    points?: LatLong[];
};