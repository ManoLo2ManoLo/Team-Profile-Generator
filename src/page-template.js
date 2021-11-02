const copyFile = require('../utils/generate-site');

function generateTeam(data) {
  if (data.github) {
    return `<div class="col s6">
          <div class="card">
            <div class="card-content white-text">
              <span class="title">${data.name}</span>
              <p class="icon"><i class="fas fa-glasses icon"></i> Engineer</p>
            </div>
            <div class="card-action">
              <p class="white-text">ID: ${data.id}</p>
              <p class="white-text">Email: <a href="mailto: ${data.email}" target="_blank">${data.email}</a></p>
              <p class="white-text">Github: <a href="https://www.github.com/${data.github}" target="_blank">${data.github}</a></p>
            </div>
          </div>
        </div>`
  } else if (data.school) {
    return `<div class="col s6">
          <div class="card">
            <div class="card-content white-text">
              <span class="title">${data.name}</span>
              <p class="icon"><i class="fas fa-user-graduate icon"></i> Intern</p>
            </div>
            <div class="card-action">
              <p class="white-text">ID: ${data.id}</p>
              <p class="white-text">Email: <a href="mailto: ${data.email}" target="_blank">${data.email}</a></p>
              <p class="white-text">School: ${data.school}</p>
            </div>
          </div>
        </div>`
  }
}

function printTeamLayout(data) {
  let print = ''
  if (data.length > 1) {
    for (let i = 1; i < data.length; i++) {
      print += `
        ${generateTeam(data[i])}
      `
    }
    return print;
  } else {
    return ' '
  }
}

function generatePage(data) {
  copyFile() 
  return `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <!-- Compiled and minified CSS -->
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
              <link rel="stylesheet" href="style.css">
              <title>My Team</title>
            </head>
            <body>
              <nav>
                <div class="nav-wrapper">
                  <a class="brand-logo center">My Team</a>
                </div>
              </nav>

              <div class="container">
                <div class="row center">
                  <div class="col s6">
                    <div class="card">
                      <div class="card-content white-text">
                        <span class="title">${data[0].name}</span>
                        <p class="icon"><i class="fas fa-mug-hot icon"></i> Manager</p>
                      </div>
                      <div class="card-action">
                        <p class="white-text">ID: ${data[0].id}</p>
                        <P class="white-text">Email: <a href="mailto: ${data[0].email}" target="_blank">${data[0].email}</a></P>
                        <p class="white-text">Office Number: ${data[0].office}</p>
                      </div>
                    </div>
                  </div>
                  ${printTeamLayout(data)}
                </div>
              </div>
        
              <!-- Compiled and minified JavaScript -->
              <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
          </html>`
}

module.exports = generatePage;