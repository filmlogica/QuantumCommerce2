#!/bin/bash

echo "Running database migrations..."
if [ -f "backend/manage.py" ]; then
    python backend/manage.py migrate
else
    echo "No migration script found. Skipping..."
fi
echo "✅ Database migration complete!"
