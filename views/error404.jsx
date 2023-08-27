// const React = require('react')
// const Def = require('./default')

// function error404 () {
//     return (
//       <Def>
//           <main>
//               <h1>404: PAGE NOT FOUND</h1>
//               <p>Opps, sorry, we can't find this page!</p>
              {/* <div>
                  <img src="/images/mindful rocks.png" alt="mindful rocks" />
                      <div>
                        photo by <a href="https://unsplash.com/@joshuaearle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Earle</a> on <a href="/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                   </div> 
              </div> */}


//           </main>
//       </Def>
//     )
// }

// module.exports = error404

const React = require('react');
const Def = require('./default');

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/mindful rocks.png" alt="mindful rocks" />
                    <div>
                        photo by <a href="https://unsplash.com/@joshuaearle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Earle</a> on <a href="/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = error404;

