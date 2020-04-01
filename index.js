 const navbar = document.querySelector('.navbar');
        const button = document.querySelectorAll('button');
        const body= document.querySelector('body')
        const btnA = document.querySelector('#a');
        const rockerA= document.querySelector('.switch-left');
        const rockerB= document.querySelector('.switch-right');

        let isOn = true;

        lightOn = () => {
            console.log(`button was cliocked!`)
            if (isOn) {
                body.style.backgroundColor = 'white';
                isOn = !isOn;
            }
            else {
                body.style.backgroundColor = "yellow"
                isOn = !isOn;

            }
        }

        rockerA.addEventListener('click', lightOn)
        rockerB.addEventListener('click', lightOn)
        // button.forEach((btn) => {
        //     btn.addEventListener('click', lightOn)
        // })
