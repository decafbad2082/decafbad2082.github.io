
threads = document.getElementsByClassName('thread');
threads = Array.prototype.slice.call(threads);
function myFunction() {
    search = document.getElementById('myInput').value.toLowerCase();
    result_ids = new Array()
    searchables.forEach(x => {
        if (x.toLowerCase().includes(search)) result_ids.push(x.substring(0,x.indexOf(' ')))});
    threads.forEach(x => {
        if(result_ids.includes(x.id) && x.classList.contains('hidden'))
            x.classList.remove('hidden');
        else if(!result_ids.includes(x.id) && !x.classList.contains('hidden'))
            x.classList.add('hidden');
    });
};
function toggle() {
    if (document.getElementById('myCheck').checked)
        for (e of document.getElementsByClassName('archive_link')) {
            e.setAttribute('href', e.getAttribute('external-link'));
            e.setAttribute("target", "_blank");
        }
    else
        for (e of document.getElementsByClassName('archive_link')) {
            e.setAttribute('href', e.getAttribute('internal-link'));
            e.removeAttribute('target');
        }
}