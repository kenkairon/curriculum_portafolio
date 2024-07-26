// Define el JSON con los datos necesarios
const credentialData = {
    "@context": ["https://www.w3.org/2018/credentials/v1", "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json", "https://purl.imsglobal.org/spec/ob/v3p0/extensions.json", "https://w3id.org/security/suites/ed25519-2020/v1"],
    "id": "https://acreditta.com/credential/5992cf23-7404-4943-8ac5-4a879e6534ac",
    "type": ["VerifiableCredential", "OpenBadgeCredential"],
    "issuer": {
        "type": "Profile",
        "id": "https://acreditta.com/org/talento-digital-para-chile",
        "name": "Talento Digital para Chile",
        "image": "https://acreditta-rutas-prod.s3.amazonaws.com/media/public/organization/1640_organization_5bfcf05d-fdd1-4d76-929d-2164cffbceb2/original.png",
        "url": "https://talentodigitalparachile.cl/",
        "email": "esteban.castro@fch.cl"
    },
    "issuanceDate": "2023-11-06T00:00:00-05:00",
    "expirationDate": null,
    "awardedDate": "2023-10-01T00:00:00-05:00",
    "credentialSubject": {
        "type": "AchievementSubject",
        "creditsEarned": null,
        "licenseNumber": null,
        "achievement": {
            "type": "Achievement",
            "id": "https://acreditta.com/credential/086fe707-456d-49b3-a4a2-1c3bbfc23f97",
            "criteria": {
                "id": "https://talentodigitalparachile.cl/curso/desarrollo-de-ruby-on-rails/",
                "narrative": "El/la alumn@ aprobó los módulos y el proyecto final necesarios para convertirse en un Desarrollador Ruby, cuenta con las herramientas para enfrentar todo el ciclo de vida del producto bajo un enfoque ágil y magro, generar un MVP para ser validado en el mercado. Implementando un prototipo funcional de un aplicativo web mediante técnicas de desarrollo y manejo de base de datos utilizando tecnología web, el entorno Ruby y el framework Rails."
            },
            "description": "El/la alumn@ aprobó los módulos y el proyecto final necesarios para convertirse en un Desarrollador Ruby, cuenta con las herramientas para enfrentar todo el ciclo de vida del producto bajo un enfoque ágil y magro, generar un MVP para ser validado en el mercado. Implementando un prototipo funcional de un aplicativo web mediante técnicas de desarrollo y manejo de base de datos utilizando tecnología web, el entorno Ruby y el framework Rails.",
            "humanCode": null,
            "achievementType": "badge",
            "alignment": [
                {
                    "targetName": "DESARROLLO RUBY ON RAILS PARA EMPRENDIMIENTOS DE TIPO START-UP",
                    "targetUrl": "https://talentodigitalparachile.cl/curso/desarrollo-de-ruby-on-rails/",
                    "targetDescription": "El/la alumn@ aprobó los módulos y el proyecto final necesarios para convertirse en un Desarrollador Ruby, cuenta con las herramientas para enfrentar todo el ciclo de vida del producto bajo un enfoque ágil y magro, generar un MVP para ser validado en el mercado. Implementando un prototipo funcional de un aplicativo web mediante técnicas de desarrollo y manejo de base de datos utilizando tecnología web, el entorno Ruby y el framework Rails."
                }
            ],
            "tag": [
                "ORIENTACIÓN AL PERFIL Y METODOLOGÍA DEL CURSO - 18 Horas",
                "FUNDAMENTOS DE DESARROLLO FRONT-END - 72 Horas",
                "FUNDAMENTOS DE BASES DE DATOS RELACIONALES - 56 Horas",
                "INTRODUCCIÓN A LA PROGRAMACIÓN CON RUBY - 60 Horas",
                "INTRODUCCIÓN A DESARROLLO DE APLICACIONES CON RUBY ON RAILS - 60 Horas",
                "DESARROLLO DE APLICACIONES CON RUBY ON RAILS - 60 Horas",
                "IDEACIÓN Y DISEÑO DEL PRODUCTO - 54 Horas",
                "INTRODUCCIÓN AL EMPRENDIMIENTO Y STARTUPS - 48 Horas",
                "DESARROLLO DE PORTAFOLIO DE UN PRODUCTO DIGITAL - 18 Horas",
                "PRESENTACIÓN DEL PRODUCTO A INVERSORES - 24 Horas"
            ],
            "image": {
                "type": "Profile",
                "caption": "DESARROLLO RUBY ON RAILS PARA EMPRENDIMIENTOS DE TIPO START-UP",
                "id": "https://acreditta-rutas-prod.s3.amazonaws.com/media/public/opengraph/badges/5992cf23-7404-4943-8ac5-4a879e6534ac/seal_opengraph.png"
            }
        },
        "identifier": [
            {
                "type": "identityObject",
                "identityType": "emailAddress",
                "hashed": true,
                "salt": "uqwS3jkzmT",
                "identity": "sha256$fb2a7161798a70226050499200c85de0c93dfd722afe02da5cbc990a53f6239a"
            }
        ]
    },
    "name": "DESARROLLO RUBY ON RAILS PARA EMPRENDIMIENTOS DE TIPO START-UP",
    "description": "El/la alumn@ aprobó los módulos y el proyecto final necesarios para convertirse en un Desarrollador Ruby, cuenta con las herramientas para enfrentar todo el ciclo de vida del producto bajo un enfoque ágil y magro, generar un MVP para ser validado en el mercado. Implementando un prototipo funcional de un aplicativo web mediante técnicas de desarrollo y manejo de base de datos utilizando tecnología web, el entorno Ruby y el framework Rails.",
    "image": {
        "type": "Profile",
        "caption": "DESARROLLO RUBY ON RAILS PARA EMPRENDIMIENTOS DE TIPO START-UP",
        "id": "https://acreditta-rutas-prod.s3.amazonaws.com/media/public/opengraph/badges/5992cf23-7404-4943-8ac5-4a879e6534ac/seal_opengraph.png"
    },
    "evidence": [
        {
            "id": null,
            "type": "Evidence",
            "name": "Felicidades",
            "description": "Tu constancia y superacion han dado fruto! Agradecemos tu esfuerzo y sacrificio. Un abrazo de parte de todo el equipo de Talento Digital para Chile."
        }
    ],
    "credentialSchema": [
        {
            "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
            "type": "1EdTechJsonSchemaValidator2019"
        }
    ]
};

// Usar SweetAlert para mostrar la alerta con la imagen y el card
function apretarBoton(){
    Swal.fire({
        title: credentialData.name,
        html: `
            <div style="width: 100%;">
                <img src="${credentialData.image.id}" class="card-img-top" alt="Badge Image">
                <div class="card-body">
                    <h5 class="card-title">${credentialData.name}</h5>
                    <p class="card-text">${credentialData.description}</p>
                    <a href="${credentialData.id}" target="_blank" class="btn btn-primary">Ver Credencial</a>
                </div>
            </div>
        `,
        width: '600px',        
        showCloseButton: true,
        showConfirmButton: false,
        allowOutsideClick: false
    });
}
