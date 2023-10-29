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

function Contact() {
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
                >
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  className="w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                />
              </div>

              <div className="input-wrapper relative w-full">
                <label
                  className="absolute bottom-0 left-0 font-nunito-light"
                  htmlFor="prenom"
                >
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  className="w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
                />
              </div>
            </div>

            <div className="input-wrapper relative w-full">
              <label
                className="absolute bottom-0 left-0 font-nunito-light"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border-b-2 border-greyColor pb-2 pt-1.5 outline-none hover:border-black focus:border-pinkZenika dark:bg-bgDarkMode"
              />
            </div>

            <div className="input-wrapper border-xl relative w-full px-3.5 py-5">
              <label
                htmlFor="area"
                className="absolute left-8 top-8 font-nunito-light"
              >
                Exprimez votre demande *
              </label>
              <textarea
                name="area"
                id="area"
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
