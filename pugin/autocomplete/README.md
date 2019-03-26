# Auto complete do campo titulo(245)
Para adicionar o plugin do autocompleto no campo autor, deve-se:
.1 copiar o ficheiro 245search.pl para a pasta /usr/share/koha/intranet/cataloguing/245search.pl (no linux).
Depois pressisa -se dar permissao ao ficheiro:
sudo chmod a+x /usr/share/koha/intranet/cgi-bin/cataloguing/260search.pl

.2 adicione o 254script.js direto na inteface de administradores no campo IntranetUserJS



## Referencias
(Adding autocomplete support to MARC21 260 / 264 (imprint) fields in Koha)[http://blog.l2c2.co.in/index.php/2017/01/15/adding-autocomplete-support-to-marc21-260-264-imprint-fields-in-koha/?subscribe=success#blog_subscription-2]
(gitHub do  260search.pl )[https://gist.github.com/l2c2technologies/7d0449dcb80c90880381ef4571003d1d]

