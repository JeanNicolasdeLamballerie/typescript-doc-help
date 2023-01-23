//? If you require to import some kind of library or external type :
//? import [X] from "Y"

//? Then mark this file as a global declaration.
//! declare global {

declare namespace Express {
    interface Request {
        someKindOfValue?: someKindOfInterfaceOrType; //?[X]
    }
}
// }
interface someKindOfInterfaceOrType {
    success?: true;
}

//! Do not forget to specify your types root to the compiler (see tsconfig.json)