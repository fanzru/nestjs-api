import { Controller, Get } from "@nestjs/common";

@Controller('cats')
export class CatsController{
    @Get()
    findAll(): string {
        return "Ini merupakan output dari kucing";
    }
}