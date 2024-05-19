
  export default function disableDevTools() {
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    });
  
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  
    document.addEventListener('mousedown', (e) => {
      if (e.button === 2 || e.button === 1) { // Right-click or Middle-click
        e.preventDefault();
      }
    });
  }