import mongoose from "mongoose";

import mongo from "./mongo";
import Time from "./timeModel";

// start
const init = async () => {
  mongo.createConnection();

  // listando todos os documentos
  const documentos = await Time.find().lean();

  // filtrando os documentos incorretos e já corrigindo
  const documentosCorrigidos = documentos
    .filter((doc) => typeof doc._id === "string")
    .map(
      (doc) =>
        new Time({
          _id: mongoose.Types.ObjectId(doc._id),
          nome: doc.nome,
        })
    );

  // deletando os documentos incorretos com base em um campo único
  await Time.deleteMany({ nome: { $in: documentosCorrigidos.map((doc) => doc.nome) } });

  // inserindo os documentos corrigidos
  await Time.insertMany(documentosCorrigidos);

  // array final com todos os documentos corrigidos
  const arrayFinal = [
    ...documentosCorrigidos,
    ...documentos.filter((time) => typeof time._id !== "string"),
  ];

  console.log(arrayFinal);
};

init();
