const React = require('react')

function Def (html) {
      return (
            <html>
                <head>
                    <title>REST-Rant</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossOrigin="anonymous"></script>
                    <link rel="stylesheet" href="css/style.css"/>
                </head>
                <body>
                <nav>
                        <ul>
                            <li>
                            <a href="/">Home</a>
                            </li>
                            <li>
                            <a href="/places">Places</a>
                            </li>
                            <li>
                            <a href="/places/new">Add Place</a>
                            </li>
                        </ul>
                        </nav>

                    {html.children}
                </body>
            </html>
        )
      }
      

module.exports = Def
