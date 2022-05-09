// describe("Unit test for Server", () => {
//     test("1.- Testing to see if Jest works", (done) => {
        
//         const app = "./../../app/lib/server.js";
//         const supertest = require("supertest");
//         const req = supertest(app);
        
        
//         const res = req.get("/test");

//         expect(res.status).toBe(200);
//         // expect(res.body.message).toBe("PASS!!!");
//         done();
//     });
// });

// describe("Unit test for Server", () => {
//     it("2.- Get '/v1/explorer", (done) => {
//         request(app)
//             .get("/v1/explorer/node")
//             .expect(200)
//             .expect((res) => {
//                 expect(res.json).toBe("hola");
//             })
//             .end((err, res) => {
//                 if (err) return done(err);
//                 return done();
//             });
//     });

// test("2.- GET /v1/explorer/mission", (done) => {
//     request(app)
//         .get("/launchX")
//         .expect(200)
//         .expect((res) => {
//             console.log(res.text);
//             expect(res.text).toBe("launchX");
//         })
//         .end((err, res) => {
//             if (err) return done(err);
//             return done;
//         });
// });
// });
