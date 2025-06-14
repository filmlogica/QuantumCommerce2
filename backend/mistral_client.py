import requests
import os

MISTRAL_API_URL = os.getenv("MISTRAL_API_URL")
MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY")

def get_ai_report(tier):
    response = requests.post(
        MISTRAL_API_URL,
        headers={"Authorization": f"Bearer {MISTRAL_API_KEY}"},
        json={"prompt": process_webhook({"metadata": {"tier": tier}})}
    )
    return response.json()["output"]
