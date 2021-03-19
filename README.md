## sintegra-search-engine

### Overview
Application responsible for searching information of a company in Sintegra.

### Requirements
- Docker Engine (More information at: https://docs.docker.com/get-docker)

### How to start application
Execute the following command: ```sh start.sh```.

The service will be available at: ```http://localhost:3000```.

### How to stop application
Execute the following command: ```sh shutdown.sh```.

### Endpoints
| Goal | Method | Path |
| ------------- | ------------- |
| Public consultation to the taxpayer register | GET | /v1/apis/sintegra/companies/{companyId}/receipts |

