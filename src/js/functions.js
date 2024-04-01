const isString = (param) => {
  return isNaN(+param);
};

export const askUserContinue = () => {
  const userContinue = confirm(`¿Quieres continuar?`);
  if (!userContinue) {
    alert(`Nos vemos forastero`);
  }
  return userContinue;
};

export const getUserName = () => {
  const userName = prompt(`Bienvenido forastero, ¿cómo te llamas?`);

  if (userName === null) {
    const userContinue = askUserContinue();
    if (userContinue) {
      return getUserName();
    } else {
      return false;
    }
  }

  if (!isString(userName)) {
    alert("Ese no es un nombre mama..., inténtalo de nuevo.");
    return getUserName();
  }

  if (userName.length < 3) {
    alert("Debes estar bromeando, ¿verdad? Intentar otra vez.");
    return getUserName();
  }

  if (userName === "") {
    alert("Estoy seguro de que tienes un nombre, vamos a empezar de nuevo");
    return getUserName();
  }

  alert(
    `Encantado de conocerte${userName}
    
     Soy un robot que responde con probabilidades por lo que..
     
     hazme preguntas sobre lo que quieras y te dire que tan posible es`
  );
  return userName;
};

export const questionUser = () => {
  const question = prompt(`Entonces... que pregunta tienes para mí`);

  if (question === null) {
    const questionContinue = askUserContinue();
    if (!questionContinue) {
      return false;
    } else {
      return questionUser();
    }
  }

  if (!isString(question)) {
    alert("Tonto, eso no es una pregunta, inténtalo de nuevo.");
    return questionUser();
  }

  if (question.length < 3) {
    alert("Eso no se puede considerar una pregunta... Intentemos de nuevo.");
    return questionUser();
  }

  return true;
};

export const AnswerToUser = () => {
  const answer = [
    "Es cierto",
    "Definitivamente es así",
    "Sin lugar a dudas",
    "Sí, definitivamente",
    "Puede confiar en ello",
    "A mi modo de ver, sí",
    "Lo más probable",
    "Buenas perspectivas",
    "Sí",
    "Las señales apuntan a que sí",
    "Mi respuesta sería algo confusa, prueba con otra pregunta",
    "Pregunta de nuevo más tarde",
    "Mejor no te lo digo ahora",
    "No se puede predecir ahora",
    "Concéntrate y pregunta de nuevo",
    "No cuentes con ello",
    "Mi respuesta es no",
    "Mis fuentes dicen que no",
    "Las perspectivas no son tan buenas",
    "Muy dudoso",
  ];

  const randomIndex = Math.floor(Math.random() * answer.length);
  const randomAnswer = answer[randomIndex];

  alert(randomAnswer);
};
