/*autocomplete 260*/

$(document).ready(function(){
$( '[id^="tag_260_subfield_a"]' ).autocomplete({
source: function(request, response) {
$.ajax({
url: "/cgi-bin/koha/cataloguing/260search.pl",
dataType: "json",
data: {
term: request.term,
table: "biblioitems",
field: "place"
},
success: function(data) {
response( $.map( data, function( item ) {
return {
label: item.fieldvalue,
value: item.fieldvalue
}
}));
}
});
},
minLength: 1,
});
$( '[id^="tag_260_subfield_b"]' ).autocomplete({
source: function(request, response) {
$.ajax({
url: "/cgi-bin/koha/cataloguing/260search.pl",
dataType: "json",
data: {
term: request.term,
table: "biblioitems",
field: "publishercode"
},
success: function(data) {
response( $.map( data, function( item ) {
return {
label: item.fieldvalue,
value: item.fieldvalue
}
}));
}
});
},
minLength: 1,
});
});
