const aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

module.exports = class FileService {
  constructor(app) {
    this.region = app.get('AWSRegion');
    this.bucket = app.get('S3Bucket');
    this.accessKey = app.get('AWSAccessKey');
    this.secretKey = app.get('AWSSecretKey');
  }
  async create(data) {
    try {
      const s3 = new aws.S3({
        region: this.region,
        accessKeyId: this.accessKey,
        secretAccessKey: this.secretKey,
      });
      const filename = uuidv4();
      const filetype = data.type;

      const s3Params = {
        Bucket: this.bucket,
        Key: filename,
        Expires: 500,
        ACL:'public-read',
        ContentType: `image/${filetype}`,
      };
      const signedUrl = await s3.getSignedUrl('putObject', s3Params); 
      return {
        signedUrl: signedUrl, 
        url: `https://${this.bucket}.s3.amazonaws.com/${filename}`
      };

    } catch(error) {
      return { error };
    }
  }
};
