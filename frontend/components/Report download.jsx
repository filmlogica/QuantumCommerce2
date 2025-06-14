import React, { useEffect, useState } from "react";

const ReportDownload = ({ userEmail }) => {
  const [reportLink, setReportLink] = useState(null);

  useEffect(() => {
    fetch(`/api/getReport?email=${userEmail}`)
      .then(res => res.json())
      .then(data => setReportLink(data.url));
  }, [userEmail]);

  return (
    <div>
      <h2>Your Latest Report</h2>
      {reportLink ? <a href={reportLink} download>Download PDF</a> : <p>Generating your report...</p>}
    </div>
  );
};

export default ReportDownload;
