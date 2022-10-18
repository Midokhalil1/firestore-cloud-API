import functions from 'firebase-functions'
import express from 'express'

const app = express()

app.get('/test', (req, res) => res.send ('our first cloud API works, MF!'))

export const api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
