const jwt = require('jsonwebtoken');
const request = require('supertest');
const { app } = require('../../index');
const { decrypt } = require("../../src/util/crypto")
const { WRONG_PASSWORD_ERROR, USER_NOT_FOUND_ERROR } = require("../../src/config/errorMessage.config");

const payload = {
    loginId: 'jane',
    password: 'password',
};
const wrongLoginId = {
    loginId: 'wrongId',
    password: 'password',
};
const wrongPassword = {
    loginId: 'jane',
    password: 'wrong',
};
const passwordEmpty = {
    loginId: 'jane',
    password: '',
};

describe('Fetch admin authentication test', () => {

    it('Should success login', async () => {
        const { body, status } = await request(app).post('/admin/auth/login').send(payload);
        const { data } = body;
        expect(data).not.toBeNull();
        expect(status).toBe(200);
        expect(data.name).toBe("Jane");
        expect(data.loginId).toBe("jane")
        const result = await jwt.verify(data.accessToken, process.env.TOKEN_SECRET);
        expect(decrypt(result.userId)).toBe("jane");
        expect(result).not.toBeNull();
        expect(result.exp * 1000 > Date.now()).toBe(true);

    });
    it('User not found login', async () => {
        const { body, status } = await request(app).post('/admin/auth/login').send(wrongLoginId);
        const { data, errorMsg } = body;
        expect(data).toBe(null);
        expect(errorMsg).not.toBeNull();
        expect(status).toBe(400);
        expect(errorMsg).toBe(USER_NOT_FOUND_ERROR.message);

    });
    it('Wrong Password login', async () => {
        const { body, status } = await request(app).post('/admin/auth/login').send(wrongPassword);
        const { data, errorMsg } = body;
        expect(data).toBe(null);
        expect(errorMsg).not.toBeNull();
        expect(status).toBe(400);
        expect(errorMsg).toBe(WRONG_PASSWORD_ERROR.message);
    });

    it('Password Empty login', async () => {
        const { body, status } = await request(app).post('/admin/auth/login').send(passwordEmpty);
        const { data, errorMsg } = body;
        expect(data).toBe(null);
        expect(errorMsg).not.toBeNull();
        expect(status).toBe(400);
    });

});


