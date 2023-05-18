function generateReadme(data){
    return `

# Title: ${data.title}

## Table Of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[contributing](#contributing)

[tests](#tests)

[license](#license)

[github](#github)

[email](#email)



### Description
${data.description}
    
### Installation
${data.installation}   
    
### Usage
${data.usage} 

### Contributing
${data.contributing} 

### Tests
${data.tests}

### License
${data.license}
${renderLicense(data.license)}

### Github Profile
[Github](https://github.com/${data.github})

### Email
Feel free to contact me regarding any questions concerned to the project at ${data.email}





    
    `
}



function renderLicense(lic){
    return `
For Details regarding all License please check this site
[Open License](https://choosealicense.com/licenses/)
    `
}