if((sessionStorage.getItem("usuario") === null) && (window.location.pathname != "/index.html")) {
	window.location = 'index.html';
}

if(!(sessionStorage.getItem("usuario") === null) && (window.location.pathname === "/index.html" || window.location.pathname === "/")) {
	window.location = 'dashboard.html';
}

function toggle(show) {
    var divs = ['p1', 'p2', 'p3'];
    for(i = 0; i < 3; i++) {
        if(divs[i] != show) {
            document.getElementById(divs[i]).style.display = "none";
        } else {
            document.getElementById(divs[i]).style.display = "grid";
        }
    }
}

(function(document) {
	'use strict';

	var LightTableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		}
	});

})(document);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function login() {

	usuario = document.getElementById("usuario").value;

	senha = document.getElementById("senha").value;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if(xmlhttp.responseText == "200") {
				sessionStorage.setItem("usuario", usuario);
				sessionStorage.setItem("senha", senha);
				window.location = 'dashboard.html';
			}
		}
	}

	xmlhttp.open("POST", "aplicacao.php", true);
  	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xmlhttp.send("usuario=" + usuario + "&senha=" + senha + "&opcao=login");
}

function insereVoluntario() {
	nome = document.getElementById("nome").value;
	nascimento = document.getElementById("data_nascimento").value;
	genero = document.getElementById("genero").value;
	civil = document.getElementById("estado_civil").value;
	cpf = document.getElementById("cpf").value;
	endereco = document.getElementById("endereco").value;
	complemento = document.getElementById("complemento").value;
	cep = document.getElementById("cep").value;
	estado = document.getElementById("estado").value;
	cidade = document.getElementById("cidade").value;
	bairro = document.getElementById("bairro").value;
	telefone1 = document.getElementById("telefone1").value;
	telefone2 = document.getElementById("telefone2").value;
	email = document.getElementById("email").value;
	ostatus = document.getElementById("ostatus").value;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			window.location = 'lista-voluntarios.html';
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("nome=" + nome + "&data_nascimento=" + nascimento + "&genero=" + genero + "&estado_civil=" + civil + "&endereco=" + endereco + "&complemento=" + complemento + "&cep=" + cep + "&estado=" + estado + "&cidade=" + cidade + "&bairro=" + bairro + "&telefone1=" + telefone1 + "&telefone2=" + telefone2 + "&email=" + email + "&ostatus=" + ostatus + "&cpf=" + cpf + "&opcao=inserir_voluntario");
}

function alteraVoluntario() {
	nome = document.getElementById("nome").value;
	nascimento = document.getElementById("data_nascimento").value;
	genero = document.getElementById("genero").value;
	civil = document.getElementById("estado_civil").value;
	endereco = document.getElementById("endereco").value;
	complemento = document.getElementById("complemento").value;
	cep = document.getElementById("cep").value;
	estado = document.getElementById("estado").value;
	cidade = document.getElementById("cidade").value;
	bairro = document.getElementById("bairro").value;
	telefone1 = document.getElementById("telefone1").value;
	telefone2 = document.getElementById("telefone2").value;
	email = document.getElementById("email").value;
	status = document.getElementById("status").value;
	console.log(status);
	idPessoa = getParameterByName("idPessoa");

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		window.location = 'lista-voluntarios.html';
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("idPessoa=" + idPessoa + "&nome=" + nome + "&data_nascimento=" + nascimento + "&genero=" + genero + "&estado_civil=" + civil + "&endereco=" + endereco + "&complemento=" + complemento + "&cep=" + cep + "&estado=" + estado + "&cidade=" + cidade + "&bairro=" + bairro + "&telefone1=" + telefone1 + "&telefone2=" + telefone2 + "&email=" + email + "&status=" + status + "&opcao=alterar_voluntario");
}

function listaVoluntarios() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		document.getElementById('carregando').style.display = "none";
		document.getElementById('dados').insertAdjacentHTML('beforeend', xmlhttp.responseText);
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("opcao=lista_voluntario");
}

function buscaVoluntario() {

	var idPessoa = getParameterByName("idPessoa");

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		var dados = JSON.parse(xmlhttp.response);

		document.getElementById("nome").value = dados["nome"];
		document.getElementById("data_nascimento").value = dados["nascimento"];
		document.querySelector('#genero [value="' + dados["idGenero"] + '"]').selected = true;
		document.querySelector('#estado_civil [value="' + dados["idEstadoCivil"] + '"]').selected = true;
		document.getElementById("endereco").value = dados["endereco"];
		document.getElementById("complemento").value = dados["complemento"];
		document.getElementById("cep").value = dados["cep"];
		document.querySelector('#estado [value="' + dados["idEstado"] + '"]').selected = true;
		document.getElementById("cidade").value = dados["cidade"];
		document.getElementById("bairro").value = dados["bairro"];
		document.getElementById("telefone1").value = dados["telefone1"];
		document.getElementById("telefone2").value = dados["telefone2"];
		document.getElementById("email").value = dados["email"];
		document.querySelector('#status [value="' + dados["_status"] + '"]').selected = true;

    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("idPessoa=" + idPessoa + "&opcao=busca_voluntario");
}

function insereDoacao () {
	
	xmlhttp = new XMLHttpRequest();

	dataDoacao = document.getElementById("data-doacao").value;
	cpfcnpj = document.getElementById("cpfcnpj").value;
	valor = document.getElementById("valor").value;
	descricao = document.getElementById("descricao").value;

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		window.location = 'lista-doacao.html';
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("cpfcnpj=" + cpfcnpj + "&valor=" + valor + "&descricao=" + descricao + "&dataDoacao=" + dataDoacao + "&opcao=insere_doacao");
}

function alteraDoacao() {
	dataDoacao = document.getElementById("data-doacao").value;
	cpfcnpj = document.getElementById("cpfcnpj").value;
	valor = document.getElementById("valor").value;
	descricao = document.getElementById("descricao").value;
	console.log(status);
	idDoacao = getParameterByName("idDoacao");

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			window.location = 'lista-doacoes.html';
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("idDoacao=" + idDoacao + "&cpfcnpj=" + cpfcnpj + "&valor=" + valor + "&descricao=" + descricao + "&dataDoacao=" + dataDoacao + "&opcao=altera_doacao");
}

function listaDoacao() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		
		document.getElementById('carregando').style.display = "none";
		document.getElementById('dados').insertAdjacentHTML('beforeend', xmlhttp.responseText);
		
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("opcao=lista_doacao");
}

function buscaDoacao() {

	var idDoacao = getParameterByName("idDoacao");

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		var dados = JSON.parse(xmlhttp.response);

		document.getElementById("data-doacao").value = dados["data"];
		document.getElementById("cpfcnpj").value = dados["cpfcnpj"];
		document.getElementById("valor").value = dados["dinheiro"];
		document.getElementById("descricao").value = dados["descricao"];
		
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("idDoacao=" + idDoacao + "&opcao=busca_doacao");
}

function apagaDoacao() {
	var idDoacao = getParameterByName("idDoacao");

	var confirmacao = confirm("Tem certeza que deseja apagar esta doação?");

	if(confirmacao == true) {
		xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				window.location = 'lista-doacoes.html';
			}
		}
		xmlhttp.open("POST", "aplicacao.php", true);
		xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlhttp.send("idDoacao=" + idDoacao + "&opcao=apaga_doacao");
	}
	
}

function insereUsuario() {
	xmlhttp = new XMLHttpRequest();

	usuario = document.getElementById("usuario").value;
	senha = document.getElementById("senha").value;

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		 window.location = 'lista-usuario.html';
    }
	}
	xmlhttp.open("POST", "aplicacao.php", true);
	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xmlhttp.send("&usuario=" + usuario + "&senha=" + senha + "&opcao=insere_usuario");
}

function alteraUsuario() {
	idPessoa = document.getElementById("idPessoa").value;
	usuario = document.getElementById("usuario").value;
	senha = document.getElementById("senha").value;

	idUsuario = document.getParameterByName("id").value;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("POST", "aplicacao.php", true);
	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xmlhttp.send("id=" + idUsuario + "&idPessoa=" + idPessoa + "&usuario=" + usuario + "&senha=" + senha + "&opcao=altera_usuario");
}

function buscaUsuario() {
	var idPessoa = getParameterByName("idPessoa");

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		var dados = JSON.parse(xmlhttp.response);

		console.log(xmlhttp.responseText);

		document.getElementById("usuario").value = dados["usuario"];
		document.getElementById("nome").value = dados["nome"];
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("idPessoa=" + idPessoa + "&opcao=busca_usuario");
}

function listaUsuario() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		console.log(xmlhttp.responseText);
		document.getElementById('carregando').style.display = "none";
		document.getElementById('dados').insertAdjacentHTML('beforeend', xmlhttp.responseText);
		
    }
  }
  xmlhttp.open("POST", "aplicacao.php", true);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send("opcao=lista_usuario");
}

function sair() {
	sessionStorage.removeItem("usuario");
	sessionStorage.removeItem("senha");

	window.location = 'index.html';
}