
import express = require("express");

interface base {
    updateOne: Function
}

export interface IAuthRequest extends express.Request {
    user: {}
    params: any
    id: number
}

export interface IUser extends base{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    registerDate: Date;
    Inventory: [];
}