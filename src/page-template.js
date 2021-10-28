function generateIcon(data) {
  if (data === 'Engineer') {
    return `fas fa-glasses`
  } else {
    return `fas fa-user-graduate`
  }
}

function generateTeam(data) {
  if (data.length === 0) {
    return '';
  } else {
    for (let i = 1; data.length; i++) {
      return `<div class="row center">
      <div class="col s6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${data[i].name}</span>
              <p><i class="${generateIcon(data[i].role)}"></i> ${data[i].role}</p>
            </div>
            <div class="card-action">
              <p class="white-text">ID: ${data[i].ID}</p>
              <P class="white-text">Email: <a href="mailto: ${data[i].email}" target="_blank">${data[i].email}</a></P>
              <P class="white-text">Github: <a href="https://www.github.com/${data[i].github}" target="_blank">${data[i].github}</a></P>
              <p class="white-text">Office Number: ${data[i].office}</p>
            </div>
          </div>
        </div>
      </div>

      `
    }
  }
}

function generatePage(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
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
                    <div class="card blue-grey darken-1">
                      <div class="card-content white-text">
                        <span class="card-title">${data[0].name}</span>
                        <p><i class="fas fa-mug-hot"></i> Manager</p>
                        <p></p>
                      </div>
                      <div class="card-action">
                        <p class="white-text">ID: ${data[0].ID}</p>
                        <P class="white-text">Email: <a href="mailto: ${data[0].email}" target="_blank">${data[0].email}</a></P>
                        <p class="white-text">Office Number: ${data[0].office}</p>
                      </div>
                    </div>
                  </div>
                  ${generateTeam(data)}
            </div>
        </div>
        
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
    `
}

module.exports = generatePage;