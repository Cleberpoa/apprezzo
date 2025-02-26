<?php
// Habilita a exibição de erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Define o fuso horário para Brasília
date_default_timezone_set('America/Sao_Paulo');

// Inicia a sessão para enviar mensagens de erro
header('Content-Type: application/json');

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $assunto = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : '';
    $mensagem = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    // Obtém a data e hora atuais de Brasília
    $dataHora = date('d/m/Y H:i:s');

    // Cria uma string com os dados para salvar no arquivo
    $conteudo = "Data/Hora: $dataHora\nNome: $nome\nEmail: $email\nAssunto: $assunto\nMensagem: $mensagem\n\n";

    // Salva os dados no arquivo contatos.txt
    $salvou = file_put_contents('contatos.txt', $conteudo, FILE_APPEND) !== false;

    // Retorna uma resposta JSON
    echo json_encode([
        'success' => $salvou,
        'message' => $salvou ? 'Sua mensagem foi enviada. Obrigado!' : 'Não foi possível enviar a mensagem.'
    ]);
}
?>
