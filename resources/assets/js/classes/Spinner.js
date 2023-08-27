class Spinner {

    constructor() {
        this.loading = null;
        this.waitingText = 'Please wait...';
    }

    button(target) {
        let classes = ['spinner', 'spinner-left', 'spinner-sm', 'disabled'];

        if (this.isOn()) {
            target.classList.add(...classes);
            target.setAttribute('data-initials', target.innerHTML);

            if (target.classList.contains('btn-icon')) {
                target.innerHTML = '';
            } else {
                target.innerHTML = this.waitingText;
            }
        }

        if (this.isOff()) {
            target.classList.remove(...classes);
            target.innerHTML = target.getAttribute('data-initials');
        }

        target.disabled = this.isOn();
    }

    modal(modal) {
        if (this.isOn()) {
            modal.spinOn(this.waitingText);
        }

        if (this.isOff()) {
            modal.spinOff();
        }
    }

    block( selection ){
        let element = document.getElementById(selection);
        element.classList.add('blockui');

        let overlay = element.getElementsByClassName('blockui-overlay')[0];

        if (this.isOn()) {
            if( !overlay )
                element.append( this.overlay() );
        }

        if (this.isOff()) {
            if( overlay )
                element.removeChild( overlay );
        }
    }

    text() {

    }

    card() {

    }

    page() {

    }

    overlay(){
        let overlay = document.createElement('div');
        overlay.classList.add('blockui-overlay', 'blockui-overlay-custom');

        let overlayMessage = document.createElement('div');
        overlayMessage.classList.add('blockui-message');

        let spinner = document.createElement('span');
        spinner.classList.add('spinner-border', 'text-primary');

        overlayMessage.appendChild(spinner);
        overlayMessage.append(this.waitingText);
        overlay.appendChild(overlayMessage);

        return overlay;
    }

    setWaitingText(text){
        this.waitingText = text;
        return this;
    }

    on() {
        this.loading = true;
        return this;
    }

    off() {
        this.loading = false;
        return this;
    }

    isOn() {
        return this.loading;
    }

    isOff() {
        return !this.loading;
    }

    get(){
       return this;
    }
}

export default Spinner;