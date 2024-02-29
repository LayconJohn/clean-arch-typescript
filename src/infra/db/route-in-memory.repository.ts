import { Route } from "../../domain/route.entity";
import { RouteReporitoryInterface } from "../../domain/route.repository";

export class RouteInMemoryRepository implements RouteReporitoryInterface {
    items: Route[] = [];
    async insert(route: Route): Promise<void> {
        this.items.push(route)
    }

    async findAll(): Promise<Route[]> {
        return this.items;
    }

}