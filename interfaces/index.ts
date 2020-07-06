
import express = require("express");

interface Base extends express.Request {
    updateOne: Function
    params: any
}

export interface IAuthRequest extends Base {
    user: {}
    id: number
}

export interface IUser extends Base {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    registerDate: Date;
    Inventory: [];
}
