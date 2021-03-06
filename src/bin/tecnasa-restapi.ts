#!/usr/bin/env node
require('dotenv').config();

import * as cdk from 'aws-cdk-lib';
import { TecnasaRestapiStack } from '../lib/tecnasa-restapi-stack';

const app = new cdk.App();

const stackEnv = process.env.STACK_ENV ?? 'dev';
const jwtKey = process.env.JWT_KEY ?? '';

const prefix = `${ stackEnv }`;

new TecnasaRestapiStack(app, `${prefix}Tecnasa`, {
    prefix,
    JWT_KEY: jwtKey
});
