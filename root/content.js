function modifyAnchors() {
  const anchors = document.querySelectorAll('a[href]');
  var count=0;
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
        count++;
      }
    }
  });
  //console.log('modified ' + count + ' anchors');
}

// Run the modification initially
modifyAnchors();

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
  modifyAnchors();
});

// Configure the observer to watch for changes in the subtree and attributes
const observerConfig = { subtree: true, attributes: true };

// Start observing the document
observer.observe(document.body, observerConfig);

