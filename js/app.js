$("#btn-about").on("click", function(e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset
    },
    500
  );
});

function languagePt() {
  document.getElementById("intro-p").innerHTML =
    "Olá, me chamo Brenda Matias e sou desenvolvedora Front-End.";
  document.getElementById("btn-about").innerHTML =
    "SABER MAIS <i class='fas fa-arrow-down'></i>";
  document.getElementById("about-title").innerHTML = "Sobre";
  document.getElementById("about-text").innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";
  document.getElementById("profile-title").innerHTML = "Perfil";
  document.getElementById("profile-name").innerHTML = "Nome";
  document.getElementById("profile-birth").innerHTML = "Data de Nascimento";
  document.getElementById("profile-address").innerHTML = "Endereço";
  document.getElementById("profile-address-text").innerHTML =
    "Rua Real da Torre, Madalena - Recife, PE";
  document.getElementById("profile-telefone").innerHTML = "Telefone";
  document.getElementById("skills-title").innerHTML = "Habilidades";
  document.getElementById("btn-download").innerHTML = "Baixe meu currículo";
  document.getElementById("formation-title").innerHTML =
    "Formação e Certificados";
  document.getElementById("formation-1").innerHTML =
    "Faculdade Maurício de Nassau - Engenharia da Computação";
  document.getElementById("formation-2").innerHTML =
    "Alura Cursos Online - Certificação Java";
  document.getElementById("formation-3").innerHTML =
    "Alura Cursos Online - Certificação Ionic 3";
  document.getElementById("formation-4").innerHTML =
    "Alura Cursos Online - Certificação React Native";
  document.getElementById("formation-5").innerHTML =
    "Origamid - Certificação Web Design";
  document.getElementById("formation-6").innerHTML =
    "Origamid - Certificação Vue.js";
  document.getElementById("experiences-title").innerHTML =
    "Experiências Profissionais";
  document.getElementById("experiences-1").innerHTML =
    "Trabalhei como operadora de caixa e auxiliava no atendimento ao cliente na distribuição de medicamentos.";
  document.getElementById("experiences-2").innerHTML =
    "Trabalhei como desenvolvedora da versão internacional do SoulMV usando framework proprietário baseado em Spring Boot, GitLab para versionamento, Oracle para banco de dados e linguagem de programação Java.";
  document.getElementById("experiences-3").innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  document.getElementById("more-title").innerHTML = "Mais";
  document.getElementById("personality").innerHTML = "Personalidade";
  document.getElementById("personality-text").innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  document.getElementById("interests").innerHTML = "Interesses";
  document.getElementById("interests-text").innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  document.getElementById("hobbies-text").innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  document.getElementById("form-title").innerHTML = "Contato";
  document.getElementById("form-name").placeholder = "Seu nome.";
  document.getElementById("form-email").placeholder = "Seu email.";
  document.getElementById("form-message").placeholder = "Sua mensagem.";
  document.getElementById("form-submit").value = "Enviar";
  document.getElementById("contact-title1").innerHTML =
    "Para entrar em contato comigo";
  document.getElementById("contact-text1").innerHTML =
    "Rua Real da Torre, Madalena - Recife, PE";
  document.getElementById("contact-title2").innerHTML = "Mande-me um email";
  document.getElementById("contact-title3").innerHTML = "Para me liguar";
}

function languageEn() {
  document.location.reload(true);
}
