<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Incluir arquivos do PHPMailer manualmente
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

$response = ['success' => false, 'message' => ''];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    $response['message'] = 'Todos os campos são obrigatórios.';
  } else {
    $mail = new PHPMailer(true);

    try {
      // Configurações do servidor
      $mail->isSMTP();
      $mail->Host = 'apprezzo.com.br';
      $mail->SMTPAuth = true;
      $mail->Username = 'atendimento@apprezzo.com.br';
      $mail->Password = 'atendimento.2024'; // Use a senha real
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
      $mail->Port = 465;

      // Destinatários
      $mail->setFrom($email, $name);
      $mail->addAddress('atendimento@apprezzo.com.br'); // Adicione seu email

      // Conteúdo
      $mail->isHTML(true);
      $mail->Subject = $subject;
      $mail->Body = nl2br($message);
      $mail->AltBody = $message;

      $mail->send();

      // Set success message only if email is sent
      $response['success'] = true;
    } catch (Exception $e) {
      // Mensagem de erro mais descritiva
      switch ($e->getCode()) {
        case PHPMailer::EXCEPTION_MAILER_NOT_READY:
          $response['message'] = 'O servidor de email não está pronto.';
          break;
        case PHPMailer::EXCEPTION_INVALID_ARGS:
          $response['message'] = 'Argumentos inválidos.';
          break;
        case PHPMailer::EXCEPTION_EMAIL_NOT_SENT:
          $response['message'] = "O email não pôde ser enviado. Erro do Servidor de Email: {$mail->ErrorInfo}";
          break;
        default:
          $response['message'] = "Ocorreu um erro ao enviar o email. Contacte o suporte.";
      }
    }

    // Set success message after catch block
    if ($response['success']) {
      $response['message'] = 'Sua mensagem foi enviada. Obrigado!';
    }
  }
} else {
  $response['message'] = 'Requisição inválida.';
}

header('Content-Type: application/json');
echo json_encode($response);
