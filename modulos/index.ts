import {paginationPerPage, ICustomer } from "./customer";

interface SpecialCustomer extends ICustomer{
    couponQuantity: number
}

const specialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name: "Samuel",
    age: 19

}