# Configuracao do pugin autocomplete de campos (text fields)

## Auto complete do campo titulo(245)
Para adicionar o plugin do autocompleto no campo title da tabela biblio, deve-se:
.1 copiar o ficheiro 245search.pl para a pasta /usr/share/koha/intranet/cataloguing/245search.pl (no linux).
Depois pressisa -se dar permissao ao ficheiro:
sudo chmod a+x /usr/share/koha/intranet/cgi-bin/cataloguing/245search.pl

.2 adicione o 254script.js direto na inteface de administradores no campo IntranetUserJS

## Auto complete do campo titulo(245)
Para adicionar o plugin do autocompleto no campo title da tabela biblio, deve-se:
.1 copiar o ficheiro 245search.pl para a pasta /usr/share/koha/intranet/cataloguing/245search.pl (no linux).
Depois pressisa -se dar permissao ao ficheiro:
sudo chmod a+x /usr/share/koha/intranet/cgi-bin/cataloguing/260search.pl

.2 adicione o 254script.js direto na inteface de administradores no campo IntranetUserJS

##### OBS: 
Este script pode ser usado para todos os campos, mas para isso deve-se mudar alguns parametros
Bo 245script.js altera-se o nome da tabela e o campo especifico (table and field), no caso do campo 245:

>	$(document).ready(function(){
	$( '[id^="tag_245_subfield_a"]' ).autocomplete({
	source: function(request, response) {
	$.ajax({
	url: "/cgi-bin/koha/cataloguing/245search.pl",
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

 

E no caso do campo 260:

> 	$( '[id^="tag_260_subfield_a"]' ).autocomplete({
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


Assim como deve ser mudado a tabela no ficheiro *search.pl para o campo desejado

> die() unless ($table eq "biblioitems"); 





## Referencias
![Adding autocomplete support to MARC21 260 / 264 (imprint) fields in Koha](http://blog.l2c2.co.in/index.php/2017/01/15/adding-autocomplete-support-to-marc21-260-264-imprint-fields-in-koha/?subscribe=success#blog_subscription-2)
![gitHub do  260search.pl](https://gist.github.com/l2c2technologies/7d0449dcb80c90880381ef4571003d1d)

