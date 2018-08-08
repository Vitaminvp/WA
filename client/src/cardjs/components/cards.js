import { Ajax } from './../utils/ajax';
import { appConfig } from './../config.js';

export class Cards{
    constructor (target) {
        this.target = target;
        this.render();
    }
    render(){
        this.ul = document.createElement('ul');
        this.btn = document.createElement('button');
        this.btn.innerHTML = "GET DATA";
        this.btn.className = "btn";
        this.target.appendChild(this.btn);
        this.output = document.createElement('div');
        this.output.className = "output";
        this.output.style.display = "flex";
        this.btn.addEventListener('click', () => {
            this.output.innerHTML = "";
            this.output.appendChild(this.ul);
            this.ul.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
            this.target.appendChild(this.output);
            Ajax.get(`${appConfig.apiUrl}api/v1/items`, this.renderItems.bind(this));
        });
    }
    renderItems(ajaxRespons){
        this.output.innerHTML = "";
        let ul = document.createElement('ul');
        for (let key in ajaxRespons){
            let li = document.createElement('li');
            li.innerHTML = key + ': ' + ajaxRespons[key];
            ul.appendChild(li);
        }
        this.output.appendChild(ul);
    }
}