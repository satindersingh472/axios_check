function success_function(response) {
    let count = 0;
    for (count = 0; count < response[`data`].length; count++) {
        info[`innerHTML`] += `<h3> ${response[`data`][count][`title`]} </h3>`;
        info[`innerHTML`] += `<p>${response[`data`][count][`body`]}</p>`;
    }
}
function failure_function(error) {
    info[`innerHTML`] = `<p>An error has occured</p>`;
}

axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(success_function).catch(failure_function);

let info = document.getElementById(`info`);