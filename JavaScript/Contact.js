const form = document.querySelector("form");

const onSubmit = (e) => {
  e.preventDefault();
  const data = getFormDataJson();
  validateFormData(data);
  validateEimelFormData(data);
}

form.addEventListener("submit", onSubmit);

const getFormDataJson = () => {
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  return data;
};

const validateFormData = (data) => {
  const hrt = data.name.split(" ").filter(v => v);
 
  if (hrt.length < 2) {
    document.querySelector("input#name + small").innerHTML =
      "Please write full name";
  } else {
    document.querySelector("input#name + small").innerHTML = "";
  }
};

const validateEimelFormData = (data) => {
  
  if (!data.emailField.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)) {
    document.querySelector("input#emailField + small").innerHTML =
      "Please write a valid email";
  } else {
    document.querySelector("input#emailField + small").innerHTML = "";
  }

  if (data.query.length < 30 || data.query.length > 150) {
    document.querySelector("textarea#query + small").innerHTML = "The entire application must be written";
  } else {
    document.querySelector("input#query + small").innerHTML = "";
  }
} 
