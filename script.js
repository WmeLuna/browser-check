// Credit to chatGPT

// Get User Agent
const userAgent = navigator.userAgent;

// Separate Window Object Properties
let regularProps = [];
let nativeCodeProps = [];

Object.getOwnPropertyNames(window).forEach(prop => {
  if (typeof window[prop] === 'function' && window[prop].toString().includes('[native code]')) {
    nativeCodeProps.push(`${prop}: ${window[prop]}`);
  } else {
    regularProps.push(`${prop}: ${window[prop]}`);
  }
});

// Display Information
document.getElementById('info').innerHTML = `
  <h2>User Agent</h2>
  <p>${userAgent}</p>
  <h2>Window Properties</h2>
  <details>
    <summary>Regular Properties</summary>
    <p>${regularProps.join('<br>')}</p>
  </details>
  <details>
    <summary>Native Code Functions</summary>
    <p>${nativeCodeProps.join('<br>')}</p>
  </details>
`;
