let loggedIn: boolean = false;

function login() {
  loggedIn = true;
  console.log("Usuário logado com sucesso!");
}

function logout() {
  loggedIn = false;
  console.log("Usuário deslogado.");
}

if (!loggedIn) {
  login();
} else {
  logout();
}
