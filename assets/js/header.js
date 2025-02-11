document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');

    // Crear el header
    const header = document.createElement('header');
    header.className = 'bg-primary text-white text-center py-5 elegant-gradient-border';

    // Crear el título
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Carlos Enrique Vásquez Colimilla';
    header.appendChild(title);

    // Crear la sección
    const section = document.createElement('section');
    section.className = 'py-5 bg-dark text-white';

    const container = document.createElement('div');
    container.className = 'container';

    const divContent = document.createElement('div');
    divContent.className = 'text-center p-4 border border-secondary rounded';

    const subtitle = document.createElement('h4');
    subtitle.id = 'subtitle';
    subtitle.className = 'font-weight-bold display-4 mb-3 d-none d-sm-block';

    const iconText = document.createElement('span');
    iconText.className = 'icon-text';

    const iconCode = document.createElement('i');
    iconCode.className = 'bi bi-code-slash text-light mr-2';
    iconText.appendChild(iconCode);
    iconText.appendChild(document.createTextNode('Desarrollador Web'));

    subtitle.appendChild(iconText);
    divContent.appendChild(subtitle);

    const paragraph = document.createElement('p');
    paragraph.className = 'text-light fs-5';
    paragraph.textContent = 'Especializado en: ';

    const skills = [
        { icon: 'fab fa-html5', color: 'rgba(232, 131, 106, 0.5)', name: 'HTML5' },
        { icon: 'fab fa-css3-alt', color: 'rgba(21, 114, 182, 0.8)', name: 'CSS3' },
        { icon: 'fab fa-js', color: 'rgba(156, 143, 48, 0.8)', name: 'JavaScript' },
        { icon: 'fab fa-bootstrap', color: 'rgba(86, 61, 124, 0.8)', name: 'Bootstrap' },
        { icon: 'fas fa-gem', color: 'rgba(165, 87, 88, 0.6)', name: 'Ruby' },
        { icon: 'fab fa-node-js', color: 'rgba(140, 200, 75, 0.8)', name: 'Node.js' },
        { icon: 'fab fa-python', color: 'rgba(48, 105, 152, 0.8)', name: 'Python' },
        { icon: 'fas fa-leaf', color: 'rgba(104, 212, 171, 0.8)', name: 'Django' }
    ];

    skills.forEach((skill, index) => {
        const skillSpan = document.createElement('span');
        skillSpan.className = 'icon-text';
        skillSpan.style.color = skill.color;

        const skillIcon = document.createElement('i');
        skillIcon.className = skill.icon;
        skillSpan.appendChild(skillIcon);
        skillSpan.appendChild(document.createTextNode(` ${skill.name}`));

        paragraph.appendChild(skillSpan);
        if (index < skills.length - 1) {
            paragraph.appendChild(document.createTextNode(', '));
        } else {
            paragraph.appendChild(document.createTextNode(', y '));
        }
    });

    divContent.appendChild(paragraph);
    container.appendChild(divContent);
    section.appendChild(container);

    // Crear la sección de habilidades adicionales
    const additionalSkills = document.createElement('div');
    additionalSkills.className = 'py-3';

    const additionalSkillsTitle = document.createElement('h4');
    additionalSkillsTitle.className = 'font-weight-light';
    additionalSkillsTitle.textContent = 'Habilidades adicionales:';
    additionalSkills.appendChild(additionalSkillsTitle);

    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'd-flex justify-content-center';

    const additionalIcons = ['bi-github', 'bi-stack', 'bi-terminal', 'bi-cloud'];
    additionalIcons.forEach(iconClass => {
        const icon = document.createElement('i');
        icon.className = `bi ${iconClass} text-light mx-3`;
        icon.style.fontSize = '2rem';
        iconsContainer.appendChild(icon);
    });

    additionalSkills.appendChild(iconsContainer);
    section.appendChild(additionalSkills);

    // Crear los botones
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'mt-2';

    const buttonChatGPT = document.createElement('button');
    buttonChatGPT.id = 'openModal';
    buttonChatGPT.className = 'btn btn-light shadow px-3 py-2 fs-5';
    buttonChatGPT.innerHTML = '<i class="bi bi-robot"></i> ¿Qué Piensa Chat GPT de mí?';
    buttonsContainer.appendChild(buttonChatGPT);

    const buttonSkills = document.createElement('button');
    buttonSkills.type = 'button';
    buttonSkills.className = 'btn btn-dark shadow px-3 py-2 fs-5';
    buttonSkills.setAttribute('data-bs-toggle', 'modal');
    buttonSkills.setAttribute('data-bs-target', '#skillsModal');
    buttonSkills.innerHTML = '<i class="bi bi-bar-chart-line"></i> Ver Gráfico de Habilidades <i class="bi bi-emoji-sunglasses"></i>';
    buttonsContainer.appendChild(buttonSkills);

    header.appendChild(section);
    header.appendChild(buttonsContainer);

    // Añadir el header al contenedor principal
    app.appendChild(header);
});