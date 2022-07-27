const aws = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const logger = require('../../logger');

module.exports = class FileService {
  constructor(app) {
    this.region = app.get('AWSRegion');
    this.bucket = app.get('S3Bucket');
    this.accessKey = app.get('AWSAccessKey');
    this.secretKey = app.get('AWSSecretKey');
    this.s3 = new aws.S3({
      region: this.region,
      accessKeyId: this.accessKey,
      secretAccessKey: this.secretKey,
    });
  }
  async create(data, params) {
    try {
      const filename = `${params.user._id}/${uuidv4()}`;
      const filetype = data.type;

      const s3Params = {
        Bucket: this.bucket,
        Key: filename,
        Expires: 500,
        ACL: 'public-read',
        ContentType: `image/${filetype}`,
      };
      const signedUrl = await this.s3.getSignedUrl('putObject', s3Params);
      return {
        filePath: filename,
        signedUrl: signedUrl,
        url: `https://${this.bucket}.s3.amazonaws.com/${filename}`,
      };
    } catch (error) {
      return { error };
    }
  }
  async remove(data) {
    const s3Params = {
      Bucket: this.bucket,
      Key: data.path,
    };
    try {
      await this.s3.headObject(s3Params).promise();
      try {
        await this.s3.deleteObject(s3Params).promise();
        const message = `Remove file success. File deleted: ${data.path}`;
        logger.info(message);
        return { success: message };
      } catch (err) {
        const message = `Remove File error. Failed to delete: ${err}`;
        logger.error(message);
        return { error: message };
      }
    } catch (err) {
      const message = `Remove file error. File not found: ${err}`;
      logger.error(message);
      return { error: message };
    }
  }
};
