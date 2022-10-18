import { dbConnect } from "./dbConnect.js";

export function createUser(req, res) {
  const db = dbConnect();

  db.collection("users")
    .add(req.body)
    .then((doc) =>
      res.status(201).send({ success: true, message: "User created:" + doc.id })
    )
    .catch((err) => res.status(500).send({ success: false, message: err }));
}

export async function getAllUsers(req, res) {
  const db = dbConnect();
  const collection = await db
    .collection("users")
    .get()
    .catch((err) => res.status(500).send({ success: false, message: err }));
  const users = collection.docs.map((doc) => {
    let user = doc.data();
    user.uid = doc.id;
    return user;
  });
  res.send(users);
}

// export async function updatesUser(req, res) {
//     const (uid) = req.params

// }
