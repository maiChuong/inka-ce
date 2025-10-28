// External API Integration for Inka-CE
window.addEventListener("DOMContentLoaded", () => {
  const endpointInput = document.getElementById("apiEndpoint");
  const apiKeyInput = document.getElementById("apiKey");
  const methodSelect = document.getElementById("apiMethod");
  const headersInput = document.getElementById("apiHeaders");
  const payloadInput = document.getElementById("apiPayload");
  const sendBtn = document.getElementById("sendApiRequestBtn");

  sendBtn?.addEventListener("click", () => {
    const endpoint = endpointInput.value.trim();
    const method = methodSelect.value;
    const apiKey = apiKeyInput.value.trim();
    const headersRaw = headersInput.value.trim();
    const payloadRaw = payloadInput.value.trim();

    if (!endpoint) return showToast("API endpoint is required.", "warning");

    let headers = {};
    let payload = {};

    try {
      headers = headersRaw ? JSON.parse(headersRaw) : {};
      payload = payloadRaw ? JSON.parse(payloadRaw) : {};
    } catch (err) {
      return showToast("Invalid JSON in headers or payload.", "error");
    }

    if (apiKey) {
      headers["Authorization"] = `Bearer ${apiKey}`;
    }

    showToast("Sending API request...", "info");

    fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: method === "POST" ? JSON.stringify(payload) : undefined
    })
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data);
        showToast("API response received.", "success");
        // Optional: handle image or canvas injection here
      })
      .catch(err => {
        console.error("API Error:", err);
        showToast("API request failed.", "error");
      });
  });
});
