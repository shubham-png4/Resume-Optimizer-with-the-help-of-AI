function optimizeResume() {
    const jobText = document.getElementById('jobDesc').value.toLowerCase();
    const resumeText = document.getElementById('resumeText').value.toLowerCase();
    
    // Common industry keywords to scan for (expand this list as needed)
    const keywords = ['python', 'javascript', 'react', 'sql', 'project management', 'agile', 'aws', 'communication', 'leadership', 'data analysis', 'git', 'docker', 'api'];
    
    let jobKeywords = keywords.filter(kw => jobText.includes(kw));
    let resumeKeywords = keywords.filter(kw => resumeText.includes(kw));
    
    // Calculate Match
    let missing = jobKeywords.filter(kw => !resumeKeywords.includes(kw));
    let matchPercentage = jobKeywords.length > 0 
        ? Math.round(((jobKeywords.length - missing.length) / jobKeywords.length) * 100) 
        : 0;

    // Display Results
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('matchScore').innerText = matchPercentage;
    document.getElementById('progressFill').style.width = matchPercentage + "%";
    
    const missingList = document.getElementById('missingKeywords');
    missingList.innerHTML = '';
    
    if (missing.length === 0) {
        missingList.innerHTML = '<li>Perfect! Your resume covers all detected skills.</li>';
    } else {
        missing.forEach(word => {
            let li = document.createElement('li');
            li.innerText = word;
            missingList.appendChild(li);
        });
    }
}
