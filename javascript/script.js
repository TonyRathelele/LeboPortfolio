function downloadPDF() {
    // Create an anchor element
    var link = document.createElement('a');
    link.href = 'cv/CURRICULUM VITAE OF TONY RATHELELE.pdf'; // Use forward slashes and adjust the path if needed
    link.download = 'cv.pdf'; // Set the filename for the downloaded file
    link.click(); // Programmatically click the link to trigger the download
}
