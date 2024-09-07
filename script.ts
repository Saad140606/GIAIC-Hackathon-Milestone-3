const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('resume') as HTMLElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduation-year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;

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
