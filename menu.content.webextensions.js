function get_selection()
{
var selection = window.getSelection().toString().trim().toLowerCase();
if(selection)
{
document.execCommand('Copy');
}
browser.runtime.sendMessage({selection: selection});
}
document.addEventListener('mouseup', get_selection);
