const email = "jose.messias@cubos.";

console.log(`${email.includes("@") && email.includes(".", email.indexOf("@")) && !email.includes(" ") && email[0] != "." && email[email.length - 1] != "." && email[0] != "@" && email[email.length - 1] != "@" ? "E-mail válido" : "E-mail inválido"}`);