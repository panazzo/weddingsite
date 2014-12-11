<?php
// Nas versões do PHP anteriores a 4.1.0, deve ser usado $HTTP_POST_FILES
// ao invés de $_FILES.

$uploaddir = 'uploads/';
$uploadfile = $uploaddir . $_FILES['userfile']['name'];
print "<pre>";
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploaddir . $_FILES['userfile']['name'])) {
    print "O arquivo é valido e foi carregado com sucesso. Aqui esta alguma informação:\n";
    print_r($_FILES);
} else {
    print "Possivel ataque de upload! Aqui esta alguma informação:\n";
    print_r($_FILES);
}
print "</pre>";
?>