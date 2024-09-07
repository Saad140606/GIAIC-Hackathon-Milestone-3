"use strict";
const form = document.getElementById('resume-form');
const resumeContainer = document.getElementById('resume');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const profilePic = document.getElementById('profile-pic').value;
    const education = document.getElementById('education').value;
    const university = document.getElementById('university').value;
    const graduationYear = document.getElementById('graduation-year').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const workExperience = document.getElementById('work-experience').value;
    resumeContainer.innerHTML = `
        <img src="${profilePic || 'default-profile.png'}" alt="Profile Picture">
        <h1>${name}</h1>
        <p>${email}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <p>${university}</p>
        <p>Graduation Year: ${graduationYear}</p>
        <h2>Skills</h2>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        <h2>Work Experience</h2>
        <p>${workExperience.replace(/\n/g, '<br>')}</p>
    `;
});
