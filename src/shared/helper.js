export const getEventType = (type) => {
  if (type === "hyp") return "have_you_places";
  if (type === "psb") return "personal_skills_business";
  if (type === "gsb") return "group_skills_business";
};
export const getNotificationType = (type) => {
  if (type === "nhyp") return "haveyouplace";
  if (type === "npsb") return "personalskillsbusiness";
  if (type === "ngsb") return "groupskillsbusiness";
  if (type === "nalluser") return "allusers";
  if (type === "nexistinguser") return "existingusers";
};

export async function downloadImage(imageSrc, nameOfDownload = "qr-code.png") {
  const response = await fetch(imageSrc);

  const blobImage = await response.blob();

  const href = URL.createObjectURL(blobImage);

  const anchorElement = document.createElement("a");
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;

  document.body.appendChild(anchorElement);
  anchorElement.click();

  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
}
