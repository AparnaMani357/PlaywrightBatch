/**
 * In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.
 */


let envName = "staging";
switch(envName){

    case "dev":console.log("Environment: DEV Base URL: https://dev-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Dev");
                break;
    case "staging": console.log("Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror");
                break;
    case "qa":console.log("Environment: QA Base URL: https://qa-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: QA")
                break;
    case "production" :console.log("Environment:PRODUCTION Base URL: https://production-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Production")
                break;
    default: console.log("Incorrect Env");            
}