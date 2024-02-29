import { Route } from "./route.entity";

//Adapter
export interface RouteReporitoryInterface {
    insert(route: Route): Promise<void>
    findAll(): Promise<Route[]>
}