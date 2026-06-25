document.getElementById('projectForm').addEventListener('submit', function (event) {
    // Prevent the browser from refreshing the page naturally
    event.preventDefault();

    // Extract values directly from the DOM form fields
    const payload = {
        client: document.getElementById('clientName').value,
        infrastructure: document.getElementById('infrastructure').value,
        details: document.getElementById('projectDetails').value,
        timestamp: new Date().toISOString()
    };

    // Log the clean JSON string structure directly to your developer tools console
    console.log("=== Target Ingestion Payload Structured ===");
    console.log(JSON.stringify(payload, null, 2));

    // Provide visual confirmation on the UI
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerText;

    submitBtn.innerText = "Payload Package Assembled ✓";
    submitBtn.style.backgroundColor = "#10b981"; // Transition to an operational green
    submitBtn.style.color = "#ffffff";

    // Reset button state smoothly after a brief delay
    setTimeout(() => {
        submitBtn.innerText = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';
        event.target.reset(); // Flush the inputs for the next entry
    }, 3000);
});