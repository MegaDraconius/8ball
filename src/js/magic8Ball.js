import {
  getUserName,
  questionUser,
  AnswerToUser,
  askUserContinue,
} from "../js/functions.js";

let play8Ball = () => {
  const userName = getUserName();

  if (!userName) return; // Si el usuario cancela, salir de play8Ball

  while (true) {
    const questionResult = questionUser(); // Obtener resultado de questionUser()
    if (!questionResult) break; // Si el usuario cancela, salir del bucle
    AnswerToUser();
    if (!askUserContinue()) break; // Si el usuario decide no continuar, salir del bucle
  }
};

play8Ball();
