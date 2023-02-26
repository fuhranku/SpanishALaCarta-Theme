// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = {
  en: [
    "Invalid number",
    "Invalid country code",
    "Too short",
    "Too long",
    "Invalid number",
  ],
  es: [
    "Número inválido",
    "Código de país inválido",
    "Número muy corto",
    "Número muy largo",
    "Número inválido",
  ],
  de: [
    "Ungültige Nummer",
    "Ungültiger Ländercode",
    "Zu kurz",
    "Zu lang",
    "Ungültige Nummer",
  ],
};

function validatePhoneNumber(phone) {
  if (!phone.isValidNumber()) {
    var errorCode = phone.getValidationError();
    if (errorCode == -99) {
      return errorMap[global_vars.locale][0];
    } else {
      return errorMap[global_vars.local][errorCode];
    }
  }
  return true;
}

export default validatePhoneNumber;
