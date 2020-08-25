export default function serviceWorker() {
  let serviceWorker = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(serviceWorker)
    .then((response) => {
      console.log("registration successful", response.scope);
    })
    .catch((error) => {
      console.log("registration failed", error);
    });
}
