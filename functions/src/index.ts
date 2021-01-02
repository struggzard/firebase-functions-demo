import * as functions from 'firebase-functions';

// one option is extract logic behind onRequest method and focus unit testing on it
export const helloWorldOnRequestResponse = () => {
    return "Hello from Firebase!";
}

// this method
export const helloWorldOnRequest = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs from helloWorldOnRequest!", {structuredData: true});
    response.send(helloWorldOnRequestResponse());
});

// another approach to use 'onCall' instead of 'onRequest' and test it as 'background' function
export const helloWorldOnCall = functions.https.onCall(() => {
    functions.logger.info("Hello logs from helloWorldOnCall!", {structuredData: true});
    return Promise.resolve("Hello from Firebase!");
});
