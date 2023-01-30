import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

// add cluster...
// req.body:  {
//   grafanaPort: '3000',
//   grafanaUsername: 'sangs-username',
//   grafanaPassword: 'intern',
//   kubeviewPort: '8080',
//   username: 'johnwick'
//   }

export const addClusterToDB = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // grab userID from cookies, to assign Grafana info to their DB document.
  const username = req.body.username;
  const grafPort = req.body.grafanaPort;
  const grafUsername = req.body.grafanaUsername;
  const grafPassword = req.body.grafanaPassword;
  const kubeviewPort = req.body.kubeviewPort;
  console.log('from addcluster middleware', req.body);

  const User = mongoose.model<mongoose.Document>('User');

  User.findOneAndUpdate(
    username,
    {
      $set: {
        grafPort: grafPort,
        grafUsername: grafUsername,
        grafPassword: grafPassword,
        kubeviewPort: kubeviewPort,
      },
    },
    (err: any, user: any) => {
      if (err) {
        console.log('ERROR ADDING CLUSTER');
        return res.status(404).json({ message: 'Unable to update user.' });
      }
      console.log('cluster added successfully');
      next();
    }
  );
};
