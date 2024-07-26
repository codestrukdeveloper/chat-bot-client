import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiLoader, FiSave } from "react-icons/fi";
import { useServiceStore } from "@/hooks/useServices";
import { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const iframeTage = `
<iframe 
    src="http://localhost:4000/?secretKey=adc9fb109addd45dfe2e2836" 
    style={{
        position: "fixed",
        bottom: "25px",
        right: "45px",
        width: "350px",
        height: "70%",
        border: "none",
        zIndex: 10000
    }} 
    frameborder="0">
</iframe>
`;
const IframeCodeDisplay = ({ iframeTag }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleDownload = () => {
    const blob = new Blob([iframeTag], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "iframe.html";
    link.click();
  };

  return (
    <div>
      {isModalOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.buttons}>
              <CopyToClipboard text={iframeTag}>
                <button style={styles.button}>Copy Code</button>
              </CopyToClipboard>
              <button style={styles.button} onClick={handleDownload}>
                Download Code
              </button>
            </div>
            <SyntaxHighlighter language="html" style={atomOneDark}>
              {iframeTag}
            </SyntaxHighlighter>
            <Link to="/services">
              <button
                style={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  openModalButton: {
    padding: "8px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "background-color 0.3s ease",
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "80%",
    maxWidth: "600px",
    position: "relative",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },
  button: {
    marginLeft: "10px",
    padding: "8px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "background-color 0.3s ease",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#dc3545",
    color: "#fff",
    transition: "background-color 0.3s ease",
  },
};

const CreateServicePage = () => {
  const navigate = useNavigate();
  const { loading, success, createService, error } = useServiceStore();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    websiteType: "",
    website: "",
    monthlyVisits: "",
  });
  const [errors, setErrors] = useState({});
  const [iframeTag, setIframeTag] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Service name is required";
    if (!formData.description.trim())
      tempErrors.description = "description is required";
    if (!formData.websiteType)
      tempErrors.websiteType = "Website type is required";
    if (!formData.website.trim())
      tempErrors.website = "Website link is required";
    else if (!/^https?:\/\/.+\..+/.test(formData.website))
      tempErrors.website = "Please enter a valid URL";
    if (!formData.monthlyVisits)
      tempErrors.monthlyVisits = "Monthly visits is required";
    else if (
      isNaN(formData.monthlyVisits) ||
      parseInt(formData.monthlyVisits) < 0
    )
      tempErrors.monthlyVisits = "Please enter a valid number";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = await createService(formData);
      console.log("Data", data);
      setIframeTag(data);
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      // Redirect to the services dashboard
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {success && <IframeCodeDisplay iframeTag={iframeTag} />}
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center text-blue-600 hover:underline"
        >
          <FiArrowLeft className="mr-2" /> Back to Dashboard
        </button>
        <h1 className="text-3xl font-bold mb-6">Create New Service</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Service name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md px-4 py-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className={`mt-1 block w-full px-5 py-4 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.description ? "border-red-500" : ""
              }`}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="websiteType"
              className="block text-sm font-medium text-gray-700"
            >
              Website Type
            </label>
            <select
              id="websiteType"
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              className={`mt-1 block px-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.websiteType ? "border-red-500" : ""
              }`}
            >
              <option value="">Select a type</option>
              <option value="ecommerce">E-commerce</option>
              <option value="blog">Blog</option>
              <option value="portfolio">Portfolio</option>
              <option value="corporate">Corporate</option>
              <option value="other">Other</option>
            </select>
            {errors.websiteType && (
              <p className="mt-1 text-sm text-red-500">{errors.websiteType}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-700"
            >
              Website Link
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className={`mt-1 block px-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.website ? "border-red-500" : ""
              }`}
            />
            {errors.website && (
              <p className="mt-1 text-sm text-red-500">{errors.website}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="monthlyVisits"
              className="block text-sm font-medium text-gray-700"
            >
              Monthly Visits
            </label>
            <input
              type="number"
              id="monthlyVisits"
              name="monthlyVisits"
              value={formData.monthlyVisits}
              onChange={handleChange}
              min="0"
              className={`mt-1 block px-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.monthlyVisits ? "border-red-500" : ""
              }`}
            />
            {errors.monthlyVisits && (
              <p className="mt-1 text-sm text-red-500">
                {errors.monthlyVisits}
              </p>
            )}
          </div>
          {error && <span>{error}</span>}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
            >
              {loading ? (
                <div>
                  <FiLoader className="animate-spin" />
                </div>
              ) : (
                <>
                  <FiSave className="mr-2" /> Create Service
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateServicePage;
