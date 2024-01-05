import HomeController from "../src/controller/HomeController";
export default (app) => {
    app.get('/', HomeController)
}