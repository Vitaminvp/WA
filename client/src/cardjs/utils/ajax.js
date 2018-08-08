export class Ajax {
    static get(url, responseCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    responseCallback(JSON.parse(xhr.response));
                }
            }
        }
    }
}