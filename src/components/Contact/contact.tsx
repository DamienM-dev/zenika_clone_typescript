import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nom: string;
  prenom: string;
  email: string;
  area: string;
};

const TITRE = "Nous contacter";

function Contact() {
  //  ---------- FORMULAIRE ---------

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();

  const inputValues = watch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/api/create/contact", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Erreur lors de la soumission du formulaire: ${response.status} ${response.statusText}`,
          );
        }

        resetField("nom");
        resetField("prenom");
        resetField("email");
        resetField("area");
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire:", error);
      });
  };
  // ---------- FONCTION POUR LEVER LE LABEL ----------

  const [focusedInputName, setFocusedInputName] = useState<string | null>(null);

  const handleFocus = (name: string) => {
    setFocusedInputName(name);
  };

  const handleBlur = () => {
    setFocusedInputName(null);
  };

  const getLabelStyle = (name: string) => {
    const inputValue = inputValues[name as keyof Inputs];

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4 px-3.5 py-5">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="input-wrapper relative w-full">
                <label
                  className="absolute bottom-[30px] left-0 font-nunito-light"
                  htmlFor="nom"
                  style={getLabelStyle("nom")}
                >
                  Nom *
                </label>
                <div>
                  <input
                    {...register("nom", {
                      required: "Le nom est manquant",
                      maxLength: {
                        value: 50,
                        message: "Le nom est trop long",
                      },
                    })}
                    type="text"
                    name="nom"
                    id="nom"
                    required
                    onFocus={() => handleFocus("nom")}
                    onBlur={handleBlur}
                    value={inputValues.nom ?? ""}
                    className="mt-5 w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                  />
                  {errors.nom && (
                    <span className="bg-bgError p-1 text-xs text-textError dark:bg-bgDarkError dark:text-textDarkError">
                      {errors.nom.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="input-wrapper relative w-full">
                <label
                  className="absolute bottom-[30px] left-0 font-nunito-light"
                  htmlFor="prenom"
                  style={getLabelStyle("prenom")}
                >
                  Prénom *
                </label>

                <div>
                  <input
                    {...register("prenom", {
                      required: "Le prénom est obligatoire",
                      minLength: {
                        value: 3,
                        message: "Prénom trop court",
                      },
                      maxLength: {
                        value: 50,
                        message: "Prénom trop long",
                      },
                    })}
                    type="text"
                    name="prenom"
                    id="prenom"
                    required
                    onFocus={() => handleFocus("prenom")}
                    value={inputValues.prenom ?? ""}
                    onBlur={handleBlur}
                    className="mt-5 w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                  />
                </div>
                {errors.prenom && (
                  <span className="bg-bgError p-1 text-xs text-textError dark:bg-bgDarkError dark:text-textDarkError">
                    {errors.prenom.message}
                  </span>
                )}
              </div>
            </div>

            <div className="input-wrapper relative w-full">
              <label
                className="absolute bottom-[30px] left-0 font-nunito-light"
                htmlFor="email"
                style={getLabelStyle("email")}
              >
                Email *
              </label>

              <div>
                <input
                  {...register("email", {
                    required: "L'adresse email est obligatoire",
                    maxLength: {
                      value: 50,
                      message: "Email trop longue",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "L'adresse email est invalide",
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  required
                  onFocus={() => handleFocus("email")}
                  value={inputValues.email ?? ""}
                  onBlur={handleBlur}
                  className="mt-5 w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                />
                {errors.email && (
                  <span className="bg-bgError p-1 text-xs text-textError dark:bg-bgDarkError dark:text-textDarkError">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="input-wrapper border-xl relative w-full">
              <label
                htmlFor="area"
                style={getLabelStyle("area")}
                className="absolute left-8 top-[30px] font-nunito-light"
              >
                Exprimez votre demande *
              </label>
              <div>
                <textarea
                  {...register("area", {
                    required: "Champs texte obligatoire",
                    minLength: { value: 10, message: "Texte trop court" },
                    maxLength: { value: 500, message: "Texte trop long" },
                  })}
                  name="area"
                  id="area"
                  required
                  onFocus={() => handleFocus("area")}
                  onBlur={handleBlur}
                  value={inputValues.area ?? ""}
                  rows={8}
                  className="mt-5 h-44 w-full rounded border-2 border-greyColor outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                />
                {errors.area && (
                  <span className="bg-bgError p-1 text-xs text-textError dark:bg-bgDarkError dark:text-textDarkError">
                    {errors.area.message}
                  </span>
                )}
              </div>
            </div>

            {isSubmitSuccessful && (
              <span className="dark:bgDarkSuccess dark:textDarkSuccess bg-bgSuccess p-2 text-center text-textSuccess">
                Votre email à bien été envoyé ! :)
              </span>
            )}
            <div className="flex justify-end">
              <button
                disabled={isSubmitting}
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
