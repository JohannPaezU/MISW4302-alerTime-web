const { execSync } = require('child_process');

const environment = process.env.ENVIRONMENT || 'development';

execSync(`ng build --configuration ${environment}`, { stdio: 'inherit' });
