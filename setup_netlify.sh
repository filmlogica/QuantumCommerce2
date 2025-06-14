#!/bin/bash

# Create netlify.toml with deployment settings
echo 'Creating Netlify configuration...'

cat <<EOF > netlify.toml
[build]
  command = "cd frontend && npm run build"
  publish = "frontend/build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    X-Frame-Options = "DENY"

[context.production]
  environment = { NODE_VERSION = "18", NPM_VERSION = "9" }

[context.deploy-preview]
  environment = { NODE_VERSION = "18", NPM_VERSION = "9" }
EOF

echo "✅ netlify.toml created successfully!"
