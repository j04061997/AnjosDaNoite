<?php
include_once("conexao.php");
$result_cursos = "SELECT * FROM voluntarios";
$resultado_cursos = mysqli_query($strcon, $result_cursos);
?>

<!doctype html>
<html lang="pt-br">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Listagem Voluntários</title>
</head>
<body>

<div class ="page-header">
    <h1>Listagem de Voluntários</h1>
</div>
<div class ="row">
    <div class ="col-md-12">
        <table class="table" id="voluntarios">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Endereço</th>
                <th scope="col">Complemento</th>
                <th scope="col">Bairro</th>
                <th scope="col">CEP</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col">Data Nascimento</th>
                <th scope="col">Data Cadastro</th>
            </tr>
            </thead>
            <tbody>
            <?php while($rows_cursos = mysqli_fetch_assoc($resultado_cursos)){ ?>
            <tr>
                <th scope="row">1</th>
                <td><?php echo $rows_cursos['endereco']; ?></td>
                <td><?php echo $rows_cursos['complemento']; ?></td>
                <td><?php echo $rows_cursos['bairro']; ?></td>
                <td><?php echo $rows_cursos['cep']; ?></td>
                <td><?php echo $rows_cursos['email']; ?></td>
                <td><?php echo $rows_cursos['telefone']; ?></td>
                <td><?php echo $rows_cursos['data_nascimento']; ?></td>
                <td><?php echo $rows_cursos['data_cadastro']; ?></td>
                <td>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whateverendereco="<?php echo $rows_cursos['endereco']; ?>" data-whatevercomplemento="<?php echo $rows_cursos['complemento']; ?>"
                            data-whateverbairro="<?php echo $rows_cursos['bairro']; ?>"data-whatevercep="<?php echo $rows_cursos['cep']; ?>"data-whateveremail="<?php echo $rows_cursos['email']; ?>"
                            data-whatevertelefone="<?php echo $rows_cursos['telefone']; ?>"data-whateverdata_nascimento="<?php echo $rows_cursos['data_nascimento']; ?>" data-whateverdata_cadastro="<?php echo $rows_cursos['data_cadastro']; ?>">Alterar</button>
                </td>
            </tr>
            <?php } ?>

            </tbody>
        </table>
    </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="POST" action="processaVoluntarios.php">
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Endereço:</label>
                        <input type="text" class="form-control" name="endereco" id="endereco">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Complemento</label>
                        <input type="text" class="form-control" name="complemento" id="complemento">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Bairro</label>
                        <input type="text" class="form-control" name="bairro" id="bairro">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">CEP</label>
                        <input type="text" class="form-control" name="cep" id="cep">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">E-mail</label>
                        <input type="text" class="form-control" name="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Telefone</label>
                        <input type="text" class="form-control" name="telefone" id="telefone">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Data Nascimento</label>
                        <input type="text" class="form-control" name="data_nascimento" id="data_nascimento">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Data Cadastro</label>
                        <input type="text" class="form-control" name="data_cadastro" id="data_cadastro">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary">Alterar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script type="text/javascript">
    $('#exampleModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
        var recipientendereco = button.data('whateverendereco')
        var recipientcomplemento = button.data('whatevercomplemento')
        var recipientbairro = button.data('whateverbairro')
        var recipientcep = button.data('whatevercep')
        var recipientemail = button.data('whateveremail')
        var recipienttelefone = button.data('whatevertelefone')
        var recipientdata_nascimento = button.data('whateverdata_nascimento')
        var recipientdata_cadastro = button.data('whateverdata_cadastro')// Extract info from data-* attributes
// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
var modal = $(this)
modal.find('.modal-title').text('Alteração para voluntário ' + recipientendereco)
modal.find('#endereco').val(recipientendereco)
        modal.find('#complemento').val(recipientcomplemento)
        modal.find('#bairro').val(recipientbairro)
        modal.find('#cep').val(recipientcep)
        modal.find('#email').val(recipientemail)
        modal.find('#telefone').val(recipienttelefone)
        modal.find('#data_nascimento').val(recipientdata_nascimento)
        modal.find('#data_cadastro').val(recipientdata_cadastro)
})
        </script>
</body>
</html>