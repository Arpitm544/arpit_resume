import React, { useState } from 'react';
import { Sliders, X, Check, Upload, Sparkles } from 'lucide-react';

export const ResumeSyncModal = ({ portfolioData, setPortfolioData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('quick'); // 'quick' | 'raw'
  
  const [name, setName] = useState(portfolioData.personalInfo.name);
  const [fullName, setFullName] = useState(portfolioData.personalInfo.fullName);
  const [handle, setHandle] = useState(portfolioData.personalInfo.handle);
  const [location, setLocation] = useState(portfolioData.personalInfo.location);
  const [resumeUrl, setResumeUrl] = useState(portfolioData.personalInfo.links.resume);
  const [githubUrl, setGithubUrl] = useState(portfolioData.personalInfo.links.github);
  const [jsonText, setJsonText] = useState(JSON.stringify(portfolioData, null, 2));
  const [parseError, setParseError] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveQuick = (e) => {
    e.preventDefault();
    setPortfolioData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        name,
        fullName,
        handle,
        location,
        headline: `Hi , I am ${name}`,
        subheadline: `A Full Stack Developer based in ${location} .`,
        links: {
          ...prev.personalInfo.links,
          resume: resumeUrl,
          github: githubUrl
        }
      }
    }));
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsOpen(false);
    }, 800);
  };

  const handleSaveRaw = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setPortfolioData(parsed);
      setParseError('');
      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        setIsOpen(false);
      }, 800);
    } catch (err) {
      setParseError('Invalid JSON format: ' + err.message);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target.result;
        const parsed = JSON.parse(text);
        setPortfolioData(parsed);
        setJsonText(JSON.stringify(parsed, null, 2));
        setSavedSuccess(true);
      } catch (err) {
        setParseError('File does not contain valid JSON.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="floating-edit-btn"
        title="Quick Edit Profile / Customize Data"
      >
        <Sliders size={16} />
        <span>Customize Info</span>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <Sparkles size={18} className="modal-icon" />
                <h3 className="modal-title">Customize Portfolio & Resume Data</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="modal-close-btn">
                <X size={18} />
              </button>
            </div>

            <div className="modal-tabs">
              <button 
                className={`modal-tab ${activeTab === 'quick' ? 'active' : ''}`}
                onClick={() => setActiveTab('quick')}
              >
                Quick Details
              </button>
              <button 
                className={`modal-tab ${activeTab === 'raw' ? 'active' : ''}`}
                onClick={() => setActiveTab('raw')}
              >
                Raw Data / JSON Import
              </button>
            </div>

            <div className="modal-body">
              {activeTab === 'quick' ? (
                <form onSubmit={handleSaveQuick} className="modal-form">
                  <div className="modal-field-row">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      className="modal-input"
                    />
                  </div>
                  <div className="modal-field-row">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)} 
                      className="modal-input"
                    />
                  </div>
                  <div className="modal-field-row">
                    <label>Handle / Username (Navbar)</label>
                    <input 
                      type="text" 
                      value={handle} 
                      onChange={(e) => setHandle(e.target.value)} 
                      className="modal-input"
                    />
                  </div>
                  <div className="modal-field-row">
                    <label>Location</label>
                    <input 
                      type="text" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)} 
                      className="modal-input"
                    />
                  </div>
                  <div className="modal-field-row">
                    <label>Resume Link / File URL</label>
                    <input 
                      type="text" 
                      value={resumeUrl} 
                      onChange={(e) => setResumeUrl(e.target.value)} 
                      className="modal-input"
                    />
                  </div>
                  <div className="modal-field-row">
                    <label>GitHub URL</label>
                    <input 
                      type="text" 
                      value={githubUrl} 
                      onChange={(e) => setGithubUrl(e.target.value)} 
                      className="modal-input"
                    />
                  </div>

                  <div className="modal-actions">
                    <button type="submit" className="btn btn-save">
                      {savedSuccess ? <Check size={16} /> : null}
                      <span>{savedSuccess ? 'Saved & Applied!' : 'Save & Update Site'}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="modal-raw-container">
                  <div className="file-upload-bar">
                    <label className="upload-label">
                      <Upload size={14} />
                      <span>Import JSON file</span>
                      <input type="file" accept=".json" onChange={handleFileUpload} className="hidden-file-input" />
                    </label>
                    <span className="upload-hint">Upload or directly paste full portfolio configuration</span>
                  </div>

                  {parseError && <p className="modal-error">{parseError}</p>}

                  <textarea
                    rows={12}
                    value={jsonText}
                    onChange={(e) => setJsonText(e.target.value)}
                    className="modal-code-editor"
                  />

                  <div className="modal-actions">
                    <button onClick={handleSaveRaw} className="btn btn-save">
                      {savedSuccess ? <Check size={16} /> : null}
                      <span>{savedSuccess ? 'Applied!' : 'Apply Raw Data'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
