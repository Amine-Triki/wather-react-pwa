if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/wather-react-pwa/sw.js', { scope: '/wather-react-pwa/' })})}