import toast from "react-hot-toast";

export const handleCopyUrlCompany = async () => {
  const textElement = document.getElementById("urlEndpoint");

  if (textElement) {
    const text = textElement.textContent;
    if (text) {
      await navigator.clipboard.writeText(text);
      toast("Enlace copiado", {
        icon: "📋",
      });
    } else {
      console.error("El contenido de texto está vacío.");
    }
  } else {
    console.error(
      "No se encontró el elemento con el ID 'urlCompany'."
    );
  }
};