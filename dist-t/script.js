document.getElementById('fetchButton').addEventListener('click', () => {
    const urlInput = document.getElementById('urlInput').value;
    const proxyUrl = 'http://localhost:8080/api/';
    const iframe = document.getElementById('proxyIframe');
  
    if (urlInput) {
      iframe.src = proxyUrl + urlInput;
    } else {
      alert('Please enter a valid URL');
    }
  });