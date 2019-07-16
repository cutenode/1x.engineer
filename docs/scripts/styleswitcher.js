(function(){

    const togglestate = (state) => {
        if (state === 'fancy') {
            document.querySelector('#fancy').rel = 'alternate';
            document.querySelector('#fancyresources').rel = 'alternate';
            document.querySelector('#basic').rel = 'stylesheet';
            switchbutton.innerHTML = buttonstates['simple'].label;
            switchbutton.state = 'simple';
        } else {
            document.querySelector('#fancy').rel = 'stylesheet';
            document.querySelector('#fancyresources').rel = 'stylesheet';
            document.querySelector('#basic').rel = 'alternate';
            switchbutton.innerHTML = buttonstates['fancy'].label;
            switchbutton.state = 'fancy';
        }
    }

    const buttonstates = {
        fancy: {
            label: 'switch to simple style'
        }, 
        simple: {
            label: 'switch to fancy style'
        }
    }

    const state = 'fancy';
    const switchbutton = document.createElement("button");
    switchbutton.style.position = 'absolute';
    switchbutton.style.top = '10px';
    switchbutton.style.right = '10px';
    switchbutton.innerHTML = buttonstates[state].label;
    switchbutton.state = state;
    document.body.appendChild(switchbutton);

    switchbutton.addEventListener('click', (ev) => {
        let but = ev.target;
        togglestate(but.state);
        ev.preventDefault();
    });

})();