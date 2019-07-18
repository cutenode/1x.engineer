(function(){

    const setstate = (state) => {
        if (state === 'simple') {
            document.querySelector('#fancy').rel = 'alternate';
            document.querySelector('#fancyresources').rel = 'alternate';
            document.querySelector('#basic').rel = 'stylesheet';
        } 
        if (state === 'fancy') {
            document.querySelector('#fancy').rel = 'stylesheet';
            document.querySelector('#fancyresources').rel = 'stylesheet';
            document.querySelector('#basic').rel = 'alternate';
        }
    }

    const togglestate = (state) => {
        let newstate = (state === 'fancy') ? 'simple' : 'fancy'; 
        switchbutton.state = newstate;
        switchbutton.innerHTML = buttonstates[newstate].label;
        localStorage.state1xdeveloper = newstate;
        state = newstate;
        setstate(state);
    }

    const buttonstates = {
        fancy: {
            label: 'switch to simple style'
        }, 
        simple: {
            label: 'switch to fancy style'
        }
    }

    const state = localStorage.state1xdeveloper || 'fancy';
    const switchbutton = document.createElement('button');
    switchbutton.style.position = 'absolute';
    switchbutton.style.top = '10px';
    switchbutton.style.right = '10px';
    switchbutton.className = 'nes-btn';
    switchbutton.innerHTML = buttonstates[state].label;
    switchbutton.state = state;
    document.body.appendChild(switchbutton);
    setstate(state);

    switchbutton.addEventListener('click', (ev) => {
        let but = ev.target;
        togglestate(but.state);
        ev.preventDefault();
    });

})();