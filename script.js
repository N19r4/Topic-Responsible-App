let shipElement = document.querySelector("#ship");
let distance = 20;
let shipBound = shipElement.getBoundingClientRect();

window.addEventListener("load", () => {
    shipElement.style.position = 'relative';
    shipElement.style.left = 700 + "px";
    shipElement.style.right = 700 + "px";
});
    window.addEventListener("keydown", (e) => {
        switch(e.key)
        {
            case 'ArrowLeft':
                if (parseInt(shipElement.style.left) > 20)
                {
                    shipElement.style.left = parseInt(shipElement.style.left) - distance + 'px';
                    // shipElement.style.right = parseInt(shipElement.style.right) + distance + 'px';
                }
                break;
            case 'ArrowRight':
                if (parseInt(shipElement.style.left) < parseInt(window.innerWidth) - 200)
                {
                    shipElement.style.left = parseInt(shipElement.style.left) + distance + 'px';
                    // shipElement.style.right = parseInt(shipElement.style.right) - distance + 'px';
                } 
                break;
        }    
    });


let bulletElement = document.createElement('div');
bulletElement.className = 'bullet';
let shipX = 0;
let shipY = 0;

// function getCoordinates()
// {
//     shipX = window.scrollX + document.querySelector('#ship').getBoundingClientRect().left;
//     shipY = window.scrollY + document.querySelector('#ship').getBoundingClientRect().top;
// }

let pointsElement = document.querySelector('#points');
let points = 0;
pointsElement.innerHTML = points

let endGameElement = document.querySelector('.end-game');

document.addEventListener('keyup', (e) => {
    if (e.code == 'Space')
    {
        // getCoordinates();
        // console.log(shipX);
        // console.log(shipY);

        // bulletElement.style.top = shipY + document.querySelector('#ship').offsetHeight/2 + 'px';
        // bulletElement.style.left = shipX + document.querySelector('#ship').offsetWidth/2 + 'px';

        bulletElement.style.top = document.querySelector('#ship').offsetHeight/2 + 'px';
        bulletElement.style.left = document.querySelector('#ship').offsetWidth/2 + 'px';
        document.querySelector('#ship').appendChild(bulletElement);


        var moveBullet = setInterval(() => 
        {
            let invaderElements = document.getElementsByClassName('invader');

            // if (invaderElements.length == 0)
            if (points == 117)
            {
                document.querySelector('#invaders-field').style.cssText = "z-index: 1;";
                document.querySelector('#cover').style.cssText = 'background-color: rgba(12, 12, 12, .8);';
                endGameElement.style.display = 'block';
            }
            else
            {
                for (let i = 0; i < invaderElements.length; i++)
                {
                    let invader = invaderElements[i];

                    let invaderBound = invader.getBoundingClientRect();
                    let bulletBound = bulletElement.getBoundingClientRect();

                    if (
                        bulletBound.left >= invaderBound.left &&
                        bulletBound.right <= invaderBound.right &&
                        bulletBound.top <= invaderBound.top &&
                        bulletBound.bottom <= invaderBound.bottom
                    )
                    {
                        bulletElement.parentElement.removeChild(bulletElement);
                        // setTimeout(() => {
                            // invader.parentElement.removeChild(invader);
                            if (invader.style.opacity != '0')
                            {
                            invader.style.cssText = 'filter: invert(90%);';
                            invader.style.opacity = '0';
                            points = points + 13;
                            pointsElement.innerHTML = points;
                            }
                            
                            // if (invaderElements[0].style.opacity == '0' && invaderElements[1].style.opacity == '0' && invaderElements[2].style.opacity == '0')
                            // {
                            //     document.querySelector(".t1").style.opacity = 1;
                            // }
                            // else if (invaderElements[3].style.opacity == '0' && invaderElements[4].style.opacity == '0' && invaderElements[5].style.opacity == '0')
                            // {
                            //     document.querySelector(".t2").style.opacity = 1;
                            // }
                            // else if (invaderElements[6].style.opacity == '0' && invaderElements[7].style.opacity == '0' && invaderElements[8].style.opacity == '0')
                            // {
                            //     document.querySelector(".t3").style.opacity = 1;
                            // }
                        // }, 600)
                        
                    }
                }
            }
            
        }, 50);
    }
});

