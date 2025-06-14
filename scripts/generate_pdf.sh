#!/bin/bash

echo "Generating sample report..."
python backend/pdf_generator.py --text "This is a test report generated for debugging."

echo "✅ PDF generated successfully!"
