<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if ($email) {
        date_default_timezone_set('America/Sao_Paulo');
        $dataHora = date('Y-m-d H:i:s');
        
        $linha = "Email: $email - Data e Hora: $dataHora" . PHP_EOL;
        
        $arquivo = 'emails.txt';
        file_put_contents($arquivo, $linha, FILE_APPEND);
        
        echo "Email enviado com sucesso!";
    } else {
        echo "Email inválido!";
    }
} else {
    echo "Método de requisição inválido!";
}
