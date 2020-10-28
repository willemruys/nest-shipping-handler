# nest-shipping-handler

Using nestJS for scalability.

## start development mode

Run `npm run start`

## Available routes

1. Receive a barcode

```
POST /shipping/barcode
Authorization: Bearer token

Body:
{
    "CustomerCode": "********",
    "CustomerNumber": "********",
    "Type": "********",
    "apikey": "********"
}

Response:
<Barcode>
```

2. receive status

```
GET /status
```

3. login

```
POST /auth/login

Body:
{
    "username": "TestUser",
    "password": "PasswordUser1"
}

Response:
bearer token
```

## Logging

A start has been made to enter logs of barcode requests using mongoose.
