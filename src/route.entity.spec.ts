import { Route, RouteProps } from "./route.entity";

describe("Route tests", () => {
    test('constructor', () => {
        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
        }

        let route = new Route(routeProps);

        expect(route.props).toStrictEqual({
            ...routeProps,
            points: []
        })

        routeProps = {
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
            points: [{lat: 10, long: 11}]
        }
        route = new Route(routeProps)
        expect(route.props).toStrictEqual({
            ...routeProps,
            points: [{lat: 10, long: 11}]
        })
    });

    test("update title", () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
        }

        const route = new Route(routeProps);

        route.updateTitle('new title');

        expect(route.title).toBe('new title');
    });

    test('update position', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
        }

        const route = new Route(routeProps);

        route.updatePosition({lat: 10, long: 11}, {lat: 21, long: 22});

        expect(route.startPosition).toStrictEqual({lat: 10, long: 11});
        expect(route.endPosition).toStrictEqual({lat: 21, long: 22})
    });

    test('update points', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 10, long: 10},
            endPosition: {lat: 20, long: 20},
        }

        const route = new Route(routeProps);

        const points = [{lat: 10, long: 10}, {lat: 11, long: 11}]

        route.updatePoints(points);

        expect(route.points).toHaveLength(2);
        expect(route.points).toStrictEqual(points);

        const newPoints = [{lat: 15, long: 16}, {lat: 17, long: 18}];
        route.updatePoints(newPoints);

        expect(route.points).toHaveLength(4);
    });
});