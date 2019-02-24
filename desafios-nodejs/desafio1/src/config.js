const { env } = process;

export default {
  mongoConnection: `mongodb://${env.MONGODB_CONNECTION}/${env.MONGODB_DATABASE}`
};
