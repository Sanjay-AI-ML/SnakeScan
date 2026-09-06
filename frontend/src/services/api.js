export const api = {
  identifySnake: async (formData, token) => {
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch('/api/identify', {
      method: 'POST',
      headers: headers,
      body: formData
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      throw new Error(`Server error (${response.status}): ${text.substring(0, 100)}`);
    }

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || data.message || 'Failed to identify snake');
    }

    return data;
  },

  getHospitals: async (location = "Tamil Nadu") => {
    const response = await fetch(`/api/hospitals?location=${encodeURIComponent(location)}`);
    const data = await response.json();
    return data.hospitals || data.data || [];
  }
};
