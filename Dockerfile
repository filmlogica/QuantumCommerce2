# 1️⃣ Use lightweight Python image
FROM python:3.11-slim

# 2️⃣ Set working directory inside container
WORKDIR /app

# 3️⃣ Copy project files into container
COPY backend/ backend/
COPY requirements.txt ./

# 4️⃣ Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5️⃣ Expose Flask API port (if applicable)
EXPOSE 5000

# 6️⃣ Default command to start QuantumCommerce backend
CMD ["python", "backend/app.py"]
