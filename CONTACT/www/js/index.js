document.addEventListener("deviceready", init);
function init() {
document.querySelector("#pickContact").addEventListener("touchend",
doContactPicker, false);
}
function doContactPicker() {
    alert("hi");
navigator.contacts.pickContact(function(contact)
                               {
var s="";
s += "<h2>"+getName(contact)+"</h2>";
if(contact.emails && contact.emails.length) {
s+= "Email: "+contact.emails[0].value+"<br/>";
}
    if(contact.phoneNumbers && contact.phoneNumbers.length) {
s+= "Phone: "+contact.phoneNumbers[0].value+"<br/>";
}
if(contact.photos && contact.photos.length) {
s+= "<p><img src='"+contact.photos[0].value+"'></p>";
}
document.querySelector("#selectedContact").innerHTML=s;
},function(err){
navigator.notification.alert(
err, null, "Failure");
});
}
function getName(c) {
var name = c.displayName;
if(!name || name === "") {
if(c.name.formatted) {
return c.name.formatted;
}
if(c.name.givenName && c.name.familyName) {
return c.name.givenName +" "+c.name.familyName;
}
return "Nameless";
}
return name;
}