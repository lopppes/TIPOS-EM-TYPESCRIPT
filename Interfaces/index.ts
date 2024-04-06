// type TCustomer = {
//     name: string;
//     age: number;
// }
// type TAddress ={
//   street: string;
// }

// type TCustomerProile = TCustomer & TAddress;

// const newProfile2: TCustomerProile = {
//     name: "Samuel",
//     age: 19,
//     street: "rua 15"
// }



interface ICustomer{
    name: string;
    agr: number;
}

interface IAddress {
    street: string;
}

interface ICustomerProfile extends ICustomer, IAddress {
    id: number | string
}

const newProfile: ICustomerProfile = {
    name: "Samuel",
    agr: 19,
    street: "Rua: 12",
    id: 142
}

// mais uma forma de nomear tipos de objetos