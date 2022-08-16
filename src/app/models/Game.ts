export class Game
{
    private id: number;
    private cost: number;
    private genre: string;
    private title: string;

    constructor(__id: number, __cost: number, __genre: string, __title: string) 
    {
        this.id = __id;
        this.cost = __cost;
        this.genre = __genre;
        this.title = __title
    }

    public get Id(): number {
        return this.id;
    }
    public set Id(value: number) {
        this.id = value;
    }

    public get Title(): string {
        return this.title;
    }
    public set Title(value: string) {
        this.title = value;
    }

    public get Genre(): string {
        return this.genre;
    }
    public set Genre(value: string) {
        this.genre = value;
    }

    public get Cost(): number {
        return this.cost;
    }
    public set Cost(value: number) {
        this.cost = value;
    }
}