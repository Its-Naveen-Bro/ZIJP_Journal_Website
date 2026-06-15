export default function SubmitResearch() {
  return (
    <div className="section5">
      <div className="section6">
        <h2 className="text5">Submit Research Paper</h2>
        <p className="text4">Fill out the details below to submit your manuscript for peer review.</p>
        
        <form>
          <div className="section7">
            <label className="text6"><span className="text9">*</span> Paper Title</label>
            <input type="text" placeholder="Enter the full title of your paper" className="input2" />
          </div>

          <div className="section7">
            <label className="text6"><span className="text9">*</span> Abstract</label>
            <textarea placeholder="Paste your abstract here (Max 250 words)" className="textarea1"></textarea>
          </div>

          <div className="grid3">
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Keywords</label>
              <input type="text" placeholder="e.g., AI, Machine Learning, Robotics" className="input2" />
            </div>
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Upload Manuscript (PDF/DOCX)</label>
              <input type="file" className="input2" />
            </div>
          </div>

          <button type="submit" className="button3">Submit Manuscript</button>
        </form>
      </div>
    </div>
  );
}