export const BASE_URL = "http://127.0.0.1:1234/v1";
export const API_KEY = "lm-studio";
export const role = `You are a bot that helps user in integrating Bm2Pay Gateway Integration API in their application. You should answer questions based off the provided JSON postman collection only. 

Here is the JSON:
{
  "info": {
    "_postman_id": "c03da4aa-445b-4a55-b037-5d7ad3354ed2",
    "name": "Bm2Pay Gateway Integration",
    "description": "## Authentication  The Bm2Pay API uses Client ID and Client Secret to authenticate requests. You can get those keys from your Bm2Pay representative.  Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.  Authentication to the API is performed via JWT authentication Provide your Client ID and Client Secret as the basic auth values. A bearer token will be automatically generated.",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "14026890"
  },
  "item": [
    {
      "name": "Authorization",
      "item": [
        {
          "name": "Payment Authorization",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "client-id",
                "value": "{{clientid}}",
                "type": "text"
              },
              {
                "key": "client-secret",
                "value": "{{clientsecret}}",
                "type": "text"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\r     \"first_name\": \"Homer\",\r     \"middle_name\": \"Jay\",\r     \"last_name\": \"Simpson\",\r     \"email\": \"homer@gmail.com\",\r     \"phone\": \"5511223344\",\r     \"city\": \"Springfield\",\r     \"address\": \"742 Evergreen Terrace\",\r     \"postal_code\": \"12345\",\r     \"state\": \"New York\",\r     \"country\": \"US\",\r     \"ip\": \"117.214.109.137\",\r \r     \r     \"cardholder_name\": \"HOMER JAY SIMPSON\",\r     \"card_number\" : \"4242424242424242\",\r     \"expiration_month\" : \"07\",\r     \"expiration_year\" : \"27\",\r     \"cvv\" : \"123\",\r     \"amount\" : \"30\",\r     \"currency\" : \"mxn\"\r }",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{url}}/payment/auth",
              "host": ["{{url}}"],
              "path": ["payment", "auth"]
            }
          },
          "response": [
            {
              "name": "Success",
              "status": "OK",
              "code": 200,
              "cookie": [],
              "body": "[     {         \"initiated\": true,         \"message\": {             \"Descriptor\": \"Payment\",             \"amount\": \"3000\",             \"binInformation\": {                 \"bin\": \"424242\",                 \"lastFour\": \"4242\"             },             \"currency\": \"mxn\",             \"description\": \"succeeded\",             \"id\": \"pi_3OIPQpCIaAWtCAir1bItMJIC\",             \"payment_status\": \"AUTHORIZED\",             \"payment_type\": \"CARD\",             \"receipt_url\": \"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xTHNxTzlDSWFBV3RDQWlyKNnipasGMgY13Y8_FgI6LBZx9AwMWp2Gz0_zYVZyznoGCPeYpZ-n8FCbS9b-LWkVXfSWWCi5BwylWeM5\",             \"request_date\": \"2023-12-01 05:38:33.126675\"         },         \"provider\": \"5799b2a0-39b7-4453-a1c7-6fc8b25166ea\",         \"status\": \"succeeded\"     } ]"
            },
            {
              "name": "Errored",
              "status": "OK",
              "code": 200,
              "cookie": [],
              "body": "[     {         \"initiated\": true,         \"message\": {             \"Descriptor\": \"Payment\",             \"amount\": \"3000\",             \"binInformation\": {                 \"bin\": \"424242\",                 \"lastFour\": \"4243\"             },             \"currency\": \"mxn\",             \"description\": {                 \"error\": \"Request req_T91W8wjinZWobk: Your card number is incorrect.\"             },             \"id\": \"-\",             \"payment_status\": \"ERRORED\",             \"payment_type\": \"CARD\",             \"receipt_url\": null,             \"request_date\": \"2023-12-01 05:40:22.418731\"         },         \"provider\": \"5799b2a0-39b7-4453-a1c7-6fc8b25166ea\",         \"status\": false     } ]"
            },
            {
              "name": "Declined",
              "status": "OK",
              "code": 200,
              "cookie": [],
              "body": "[     {         \"initiated\": true,         \"message\": {             \"Descriptor\": \"Payment\",             \"amount\": \"3000\",             \"binInformation\": {                 \"bin\": \"400000\",                 \"lastFour\": \"0002\"             },             \"currency\": \"mxn\",             \"description\": {                 \"error\": \"Request req_L9CSRXGN6i7lHT: Your card was declined.\"             },             \"id\": \"-\",             \"payment_status\": \"ERRORED\",             \"payment_type\": \"CARD\",             \"receipt_url\": null,             \"request_date\": \"2023-12-01 05:42:40.273686\"         },         \"provider\": \"5799b2a0-39b7-4453-a1c7-6fc8b25166ea\",         \"status\": false     } ]"
            }
          ]
        }
      ],
      "description": "## Header  The client ID and the client secret will be provided to you by your service provider. Those credentials will need to be sent in the header of the request.  ## Parameters  First Name (Not Required)   Middle Name (Not Required)   Last Name (Not Required)   Email (Not Required)   Phone (Not Required)   Address (Not Required)   City (Not Required)   State (Not Required)   Postal code (Not Required)   Country (Not Required)   IP (Not Required)  Card Holder Name (Required)   Card Number (Required)   Expiration month (Required)   Expiration year (Required)   CVV (Required)   Amount (Required)   Currency (Required)"
    }
  ]
}
`;
