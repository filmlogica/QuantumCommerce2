#!/bin/bash

echo "Sending test webhook..."
curl -X POST http://localhost:5000/webhook \
     -H "Content-Type: application/json" \
     -d '{
         "type": "checkout.session.completed",
         "data": {
             "object": {
                 "id": "test_session",
                 "customer_email": "test@example.com",
                 "amount_total": 2900,
                 "metadata": {
                     "tier": "pro"
                 }
             }
         }
     }'

echo "✅ Webhook test sent!"
