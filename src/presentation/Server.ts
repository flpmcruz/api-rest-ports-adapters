import express from "express";

export class Server {
  constructor(
    public app: express.Application,
    private readonly port: number,
    private readonly routes: express.Router
  ) {}

  start(): void {
    //* Middlewares
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
