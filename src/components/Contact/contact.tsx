import { useRef, useState } from "react";

const TITRE = "Nous contacter";

function Contact() {
  // ---------- FORMULAIRE ----------

  type Contact = {
    message?: string;
    error?: string;
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      area: formData.get("area"),
    };

    try {
      const response = await fetch("/api/create/contact", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Réponse du serveur non attendue");
      }

      const result = (await response.json()) as Contact;
      console.log(result);
      alert("Informations envoyées avec succès!");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi du formulaire.");
    }
  };

  // ---------- FONCTION POUR LEVER LE LABEL ----------

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
        <form ref={formRef}>
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
                onClick={handleSubmit}
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
