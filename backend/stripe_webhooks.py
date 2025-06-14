import json

def process_webhook(event):
    with open(f"prompt_store/{event['metadata']['tier']}.json", "r") as file:
        prompt_data = json.load(file)
    return prompt_data["prompt"]
