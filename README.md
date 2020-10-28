# nest-shipping-handler

Using nestJS for scalability.

## Available routes

1. Receive a barcode
   Endpoint:

```
POST /shipping/barcode
Authorization: Bearer token
```

Body:

```
{
    "CustomerCode": "********",
    "CustomerNumber": "********",
    "Type": "********",
    "apikey": "********"
}
```

2. receive status
   Endpoint:
   `GET /status`

## Logging

A start has been made to enter logs of barcode requests using mongoose.
