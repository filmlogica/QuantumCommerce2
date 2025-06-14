from flask import Flask, request, jsonify
from stripe_webhooks import process_webhook
from mistral_client import get_ai_report
from pdf_generator import convert_to_pdf
from utils.storage import upload_pdf, send_email

app = Flask(__name__)

@app.route("/webhook", methods=["POST"])
def webhook_handler():
    event = request.json
    if event["type"] == "checkout.session.completed":
        report = get_ai_report(event["data"]["object"]["metadata"]["tier"])
        pdf_path = convert_to_pdf(report)
        upload_pdf(pdf_path)
        send_email(event["data"]["object"]["customer_email"], pdf_path)
    return jsonify({"status": "success"})

@app.route("/getReport", methods=["GET"])
def get_report():
    tier = request.args.get("tier")
    report = get_ai_report(tier)
    pdf_path = convert_to_pdf(report)
    return jsonify({"pdf_url": upload_pdf(pdf_path)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
