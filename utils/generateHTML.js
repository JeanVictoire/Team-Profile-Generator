const Manager = require ('../lib/Manager.js')
const Engineer = require ('../lib/Engineer.js')
const Intern = require ('../lib/Intern.js');

function generateHTML (employees) {
    
    let htmlArray = []

    for(employee of employees) {
        htmlArray.push(`
                <div class="col-10 col-lg-3 m-3 text-center p-0 shadow-lg rounded-3 bg-light">
                    <div class="container-fluid bg-success pb-1 rounded-top">
                        <h2 class="text-center text-light">${employee.getName()}</h2>
                        <h3 class="text-center text-light">${employee.getRole()}</h3>
                    </div>
                    <div class="m-3">
                        <p class="text-center border m-0 p-1">ID: ${employee.getId()}</p>
                        <p class="text-center border m-0 p-1">Email: <a href ="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                        <p class="text-center border p-1">${roles(employee)}</p>
                    </div>
                </div>`
        )
    }
    
    function roles(employee) {
        if(employee.getRole() === 'Manager') {
        return `Office: ${employee.getOfficeNum()}`
        }
        if(employee.getRole() === 'Engineer') {
            return `Github: <a href="https://github.com/${employee.getGitub()}" target="_blank">${employee.getGitub()}</a>`
        }
        if(employee.getRole() === 'Intern') {
            return `School: ${employee.getSchool()}`
        }
    }

    let cards = htmlArray.join('')

    return `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    
        <title>Team Tracker</title>
      </head>

      <body>
        <div class="container-fluid p-5 bg-info">
            <h1 class="text-center text-light">My Team Tracker</h1>
        </div>
        <div class="container">
            <div class="row justify-content-center">${cards}  
            </div>
        </div>
    
        <!-- Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    
      </body>
    </html>`
}

module.exports = { generateHTML }