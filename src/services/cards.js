export function getAllCards(cb) {
  // GET request using fetch with error handling
  fetch("https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772")
    .then(async response => {
      const data = await response.json();
      if (cb) {
          cb(data);
      }
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      this.totalVuePackages = data.total;
    })
    .catch(error => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });
}
