const request = require("supertest");
const app = require("./../../app/lib/server");

describe("1.- GET /v1/explorer/node", () => {
    test("La solicitud muestra un 'status code' 200", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
        
    });
    
    test("", () => {

    });

});
