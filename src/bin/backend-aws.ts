require('dotenv').config();

import * as cdk from 'aws-cdk-lib';
import { BackendAwsStack } from '../lib/backend-aws-stack';

const app = new cdk.App();

const stackEnv = process.env.STACK_ENV ?? 'dev';

const prefix = `${stackEnv}TecAWS`

new BackendAwsStack(app, `${prefix}BackendAwsStack`, {
    prefix
});