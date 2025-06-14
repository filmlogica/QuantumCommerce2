import pdfkit

def convert_to_pdf(text):
    html = f"<html><body><h1>QuantumCommerce Report</h1><p>{text}</p></body></html>"
    pdf_path = "reports/output.pdf"
    pdfkit.from_string(html, pdf_path)
    return pdf_path
