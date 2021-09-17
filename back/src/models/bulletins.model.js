// bulletins-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'Bulletin';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      header: { type: String, required: true, minlength: 5, maxlength: 50 },
      description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 250,
      },
      category: {
        type: String,
        enum: ['forSale', 'housing', 'jobs', 'services'],
        required: true,
      },
      image: {
        url: { type: String },
        name: { type: String },
      },
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  schema.set('versionKey', false);
  return mongooseClient.model(modelName, schema);
};
