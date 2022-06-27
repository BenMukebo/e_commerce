import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

// We're basically creating a new instance of that specificique commerce and that's going to be our store
// we need to put as first parametre inside Commwece() our public key from the store 
// NB: For the 1 argument You can name it anything you want but it need to start with capitalyse "REACT_APP"
// For the 2 argument it's true boolean meaning this is going to create a new commerce store

// This commerce instance do, usually for creating a fully function web shop application you'll need a full backend API
//  with all the router(for fetching the product, creating, Updating them...Authentification, ...)
// all of that is stored in this little commerce instance