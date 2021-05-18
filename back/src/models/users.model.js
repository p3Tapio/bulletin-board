module.exports = (app) => {
  const modelName = 'User';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new mongooseClient.Schema({
    username: { type: String, unique: true, required: true, minlength: 4 },
    password: { type: String, required: true, minlength: 5 },
    bulletins: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bulletin',
      },
    ],
  });
  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  schema.set('versionKey', false);
  return mongooseClient.model(modelName, schema);
};
