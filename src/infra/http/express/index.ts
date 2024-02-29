import express, {json, Express, Request, Response} from "express";
import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { RouteInMemoryRepository } from "../../db/route-in-memory.repository";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";

const app: Express = express();
const port = process.env.PORT || 3000
const routeRepo = new RouteInMemoryRepository()
app.use(json());
app.post('/routes', async (req: Request, res: Response) => {
    const createRouteUsecase = new CreateRouteUseCase(routeRepo);
    const output = await createRouteUsecase.execute(req.body);
    res.status(201).json(output);
});

app.get('/routes', async (req: Request, res: Response) => {
    const listAllRoutesUsecase = new ListAllRoutesUseCase(routeRepo);
    const output = await listAllRoutesUsecase.execute();
    res.status(200).json(output)
});

app.listen(port, () => console.log(`Running on ${port}`));