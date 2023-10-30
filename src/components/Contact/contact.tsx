import { useState } from "react";

const TITRE = "Nous contacter";

// function formContactSubmit() {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;

//     const formData = new FormData(form);

//     const prenom = formData.get("prenom");
//     const nom = formData.get("nom");
//     const email = formData.get("email");
//     const area = formData.get("area");

//     form.reset();
//   };
// }

// ---------- FONCTION POUR LEVER LE LABEL ----------

function Contact() {
  const [focusedInputName, setFocusedInputName] = useState<string | null>(null);
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, val: string) => {
    setInputValues((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const handleFocus = (name: string) => {
    setFocusedInputName(name);
  };

  const handleBlur = () => {
    setFocusedInputName(null);
  };

  const getLabelStyle = (name: string) => {
    const inputValue = inputValues[name];

    if (name === focusedInputName) {
      return {
        transform: "translateY(-30px)",
        fontSize: "10px",
        color: "#df2147",
        transition: "transform 0.6s",
      };
    }

    if (inputValue && inputValue.length > 0) {
      return {
        transform: "translateY(-30px)",
        fontSize: "10px",
        color: "#df2147",
        transition: "none",
      };
    } else {
      return {
        transition: "transform 0.6s",
      };
    }
  };

  return (
    <article className="dark:text-gr flex w-full items-center justify-center dark:bg-bgDarkMode dark:text-greyColor">
      <div className="w-full max-w-6xl px-4 py-10">
        <h1 className="mb-4 text-center text-4xl">{TITRE}</h1>
        <form action="" className="">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="input-wrapper relative w-full">
                <label
                  className="absolute bottom-0 left-0 font-nunito-light"
                  htmlFor="nom"
                  style={getLabelStyle("nom")}
                >
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  required
                  onFocus={() => handleFocus("nom")}
                  onBlur={handleBlur}
                  value={inputValues.nom ?? ""}
                  onChange={(e) => handleInputChange("nom", e.target.value)}
                  className="w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                />
              </div>

              <div className="input-wrapper relative w-full">
                <label
                  className="absolute bottom-0 left-0 font-nunito-light"
                  htmlFor="prenom"
                  style={getLabelStyle("prenom")}
                >
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  required
                  onFocus={() => handleFocus("prenom")}
                  value={inputValues.prenom ?? ""}
                  onChange={(e) => handleInputChange("prenom", e.target.value)}
                  onBlur={handleBlur}
                  className="w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                />
              </div>
            </div>

            <div className="input-wrapper relative w-full">
              <label
                className="absolute bottom-0 left-0 font-nunito-light"
                htmlFor="email"
                style={getLabelStyle("email")}
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onFocus={() => handleFocus("email")}
                value={inputValues.email ?? ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={handleBlur}
                className="w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
              />
            </div>

            <div className="input-wrapper border-xl relative w-full px-3.5 py-5">
              <label
                htmlFor="area"
                style={getLabelStyle("area")}
                className="absolute left-8 top-8 font-nunito-light"
              >
                Exprimez votre demande *
              </label>
              <textarea
                name="area"
                id="area"
                required
                onFocus={() => handleFocus("area")}
                onBlur={handleBlur}
                value={inputValues.area ?? ""}
                onChange={(e) => handleInputChange("area", e.target.value)}
                rows={8}
                className="h-44 w-full rounded border-2 border-greyColor outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="mx-2 mb-2 mt-6 rounded-full bg-pinkZenika p-3 uppercase text-pinkTitre"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
}

export default Contact;
