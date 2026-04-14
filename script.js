/* Event listener for recommendation form submission - Task 7 & 9 */
document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Get the form element
    const form = this;
    
    // Get input values from form
    const name = form.querySelector('input').value;
    const recommendation = form.querySelector('textarea').value;
    
    // Create a new recommendation card element
    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation-card';
    newRecommendation.innerHTML = `<p>"${recommendation}"</p><p><strong>- ${name}</strong></p>`;
    
    // Add the new recommendation to the list - Task 7
    document.getElementById('recommendations-list').appendChild(newRecommendation);
    
    // Show confirmation dialogue - Task 9
    alert('Thank you for your recommendation!');
    
    // Clear the form for next submission
    form.reset();
});