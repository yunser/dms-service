import { Controller } from 'egg';

export default class HomeController extends Controller {

    public async index() {
        const { ctx } = this
        ctx.body = await ctx.service.test.sayHi('egg22')
    }

    public async about() {
        const { ctx } = this
        ctx.body = 'v1.0.0'
    }
}
