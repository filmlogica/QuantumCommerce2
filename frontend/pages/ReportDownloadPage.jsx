import React, { useEffect, useState } from "react";

const ReportDownloadPage = () => {
  const [reportLink, setReportLink] = useState(null);

  useEffect(() => {
    fetch("/api/getLatestReport")
      .then(res => res.json())
      .then(data => setReportLink(data.url));
  }, []);

  return (
    <div className="report-download">
      <h2>Your AI-Powered Report</h2>
      {reportLink ? <a href={reportLink} download>Download PDF</a> : <p>Generating your report...</p>}
    </div>
  );
};

export default ReportDownloadPage;
