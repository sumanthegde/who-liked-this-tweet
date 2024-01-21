// content.js

function modifyAnchors() {
  var count=0;
  const anchors = document.querySelectorAll('a[href]');
 
  console.log('in modifyAnchors ' + anchors.length);

  anchors.forEach(anchor => {
    const datetimeElement = anchor.querySelector('time[datetime]');
    
    if (datetimeElement) {
      const url = new URL(anchor.href);
      const pathSegments = url.pathname.split('/');
      const lastSegment = pathSegments[pathSegments.length - 1];
     
      if (!isNaN(lastSegment)) {
        url.pathname += '/likes';

        // Create a new anchor element
        const newAnchor = document.createElement('a');
        newAnchor.href = url.toString();
        newAnchor.innerHTML = anchor.innerHTML;

        // Replace the original anchor with the new one
        anchor.parentNode.replaceChild(newAnchor, anchor);
      }
    }
  });
  console.log(' modified ' + count)
}


modifyAnchors(); // initially


setInterval(modifyAnchors, 3000);

// Run the modification when the DOM is ready
//document.addEventListener('DOMContentLoaded', modifyAnchors);

