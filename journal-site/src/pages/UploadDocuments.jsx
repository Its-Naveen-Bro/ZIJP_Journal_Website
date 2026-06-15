export default function UploadDocuments() {
  return (
    <div className="section5">
      <div className="section12"> {/* Using the narrower container here */}
        <h2 className="text5">Upload Documents</h2>
        <p className="text4" style={{ marginBottom: '30px' }}>
          Upload copyright forms, payment receipts, or revised manuscripts for an existing submission.
        </p>
        
        <form>
          <div className="section7">
            <label className="text6"><span className="text9">*</span> Paper ID</label>
            <input type="text" placeholder="e.g., ZIJP-2026-045" className="input2" />
          </div>

          <div className="section7">
            <label className="text6"><span className="text9">*</span> Document Type</label>
            <select className="select1">
              <option value="copyright">Copyright Transfer Form</option>
              <option value="revision">Revised Manuscript</option>
              <option value="payment">Payment Receipt</option>
              <option value="dataset">Supplementary Dataset</option>
            </select>
          </div>

          <div className="section7">
            <label className="text6"><span className="text9">*</span> Select File</label>
            <input type="file" className="input2" />
          </div>

          <button type="submit" className="button3">Upload File</button>
        </form>
      </div>
    </div>
  );
}