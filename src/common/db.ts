import { Mongoose, connect } from 'mongoose';
let isConnected: boolean = false;

export const connectToDatabase = () => {
  console.log('Start connecting db...');
  if (isConnected) {
    return Promise.resolve();
  }

  const defaultDb =
    process.env.db ||
    'mongodb://<adminUser>:<adminPass>@ds119732.mlab.com:19732/test-serverless'; //hardcoded db path
  const dbUri: string = defaultDb;
  console.log(dbUri);
  return connect(dbUri)
    .then((db: Mongoose) => {
      isConnected = db.connection.readyState == 1; // 1 for connected
    })
    .catch(error => {
      console.log('db error:', error);
      return Promise.reject(error);
    });
};
