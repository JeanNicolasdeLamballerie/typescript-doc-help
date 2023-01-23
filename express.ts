import express from "express";
import type { RequestHandler } from 'express';
// To get access to types, we need //! npm i --save-dev @types/express
// because express doesn't have it's types bundled with the library.
const port = process.env.EXPRESS_PORT || 4242;
const app = express();


const myExpressFunction: RequestHandler = ( req, res, next ) => {
    req.someKindOfValue = { success: true };
    //! type of req.someKindOfValue = someKindOfInterfaceOrType
    res.send( req.someKindOfValue );
};
const testingPath = "/testTypes";
app.get( testingPath, myExpressFunction );
const startServer = () => {
    app.listen( port, () => {
        console.log( `Example express server is running. Try running a get request to http://localhost:${ port + testingPath }` );
    } );
};
export default startServer;