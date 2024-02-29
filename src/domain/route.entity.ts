import crypto from "node:crypto"

export type LatLong = {
    lat: number, 
    long: number
}

export type RouteProps = {
    title: string,
    startPosition: LatLong,
    endPosition:LatLong,
    points?: LatLong[]
}

export class Route {
    public readonly id: string;
    public props: Required<RouteProps>;
    constructor(
        props: RouteProps,
        id?: string
    ) {
        this.id = id || crypto.randomUUID() 
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    updateTitle(title: string){
        this.title = title
    }

    updatePosition(startPosition: LatLong, endPosition: LatLong) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }

    updatePoints(values: LatLong[]){
        this.points = [...this.points, ...values];
    }

    get title(){
        return this.props.title
    }

    private set title(value: string) {
        this.props.title = value
    }

    get startPosition(){
        return this.props.startPosition
    }

    private set startPosition(value: LatLong) {
        this.props.startPosition = value
    }

    get endPosition(){
        return this.props.endPosition
    }

    private set endPosition(value: LatLong) {
        this.props.endPosition = value
    }

    get points(){
        return this.props.points
    }

    private set points(value: LatLong[]) {
        this.props.points = value
    }

    toJSON() {
        return {
            ...this.props,
            id: this.id
        }
    }
}

