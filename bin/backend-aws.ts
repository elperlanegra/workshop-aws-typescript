#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BackendAwsStack } from '../lib/backend-aws-stack';

const app = new cdk.App();
new BackendAwsStack(app, 'BackendAwsStack');
