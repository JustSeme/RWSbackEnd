"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3003;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/samurais', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('OK');
    }
    else {
        res.send('Hello, samurais!');
    }
});
app.post('/samurais', (req, res) => {
    const response = {
        data: {
            message: 'We have created samurai'
        },
        statusCode: 0
    };
    res.send(JSON.stringify(response));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
