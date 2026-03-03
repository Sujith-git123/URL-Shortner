const form = document.getElementById("urlForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const longUrl = document.getElementById("longurl").value;

  const res = await fetch("http://localhost:5000/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ originalUrl: longUrl })
  });

  const data = await res.json();
  result.innerHTML = `Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
});