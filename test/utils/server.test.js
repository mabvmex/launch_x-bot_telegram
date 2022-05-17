const request = require("supertest");
const app = require("./../../app/lib/server");

describe("== Unit Testing for server.js ==", () => {
    test("1.- Solicitud GET para '/' muestra 'status code' 200", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });

    test("2.- Solicitud GET para '/v1/explorer/node' muestra 'status code' 200", async () => {
        const response = await request(app).get("/v1/explorer/node").send();
        expect(response.statusCode).toBe(200);
    });

    test("3.- Solicitud GET para '/v1/explorer/username/node' muestra 'status code' 200", async () => {
        const response = await request(app)
            .get("/v1/explorer/usernames/node")
            .send();
        expect(response.statusCode).toBe(200);
    });

    test("4.- Solicitud GET para '/v1/explorer/amount/node' muestra 'status code' 200", async () => {
        const response = await request(app)
            .get("/v1/explorer/amount/node")
            .send();
        expect(response.statusCode).toBe(200);
    });
    test("5.- Solicitud GET para '/v1/explorer/stack/javascript' muestra 'status code' 200", async () => {
        const response = await request(app)
            .get("/v1/explorer/stack/javascript")
            .send();
        expect(response.statusCode).toBe(200);
    });
});

describe("== Unit Testing for server.js [Code Challenge] [VisualPartnership DB]", () => {
    test("1.- Endpoint for 'all students'", async () => {
        const response = await request(app).get("/v1/students").send();
        expect(response.statusCode).toBe(200);
    });

});