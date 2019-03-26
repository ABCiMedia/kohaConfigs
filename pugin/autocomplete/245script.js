$(document).ready(function(){
$( '[id^="tag_245_subfield_a"]' ).autocomplete({
source: function(request, response) {
$.ajax({
url: "/cgi-bin/koha/cataloguing/260search.pl",
dataType: "json",
data: {
term: request.term,
table: "biblio",
field: "title"
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
