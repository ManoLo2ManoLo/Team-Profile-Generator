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
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                      <div class="card-content white-text">
                        <span class="card-title">${data.mName}</span>
                        <p><i class="fas fa-mug-hot"></i> Manager</p>
                        <p></p>
                      </div>
                      <div class="card-action">
                        <p class="white-text">ID: ${data.mID}</p>
                        <P class="white-text">Email: <a href="mailto: ${data.mEmail}" target="_blank">${data.mEmail}</a></P>
                        <p class="white-text">Office Number: ${data.mOffice}</p>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
    `
}

module.exports = generatePage;