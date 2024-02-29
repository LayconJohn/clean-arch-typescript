import { LatLong, Route } from "./route.entity";
import { RouteReporitoryInterface } from "./route.repository";

export class CreateRouteUseCase {
    constructor(private routeRepo: RouteReporitoryInterface){

    }

    execute(input: CreateRouteInput): CreateRouteOutput{
        const route = new Route(input);
        this.routeRepo.insert(route);
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