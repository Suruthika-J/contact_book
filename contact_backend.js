document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const contactList = document.getElementById("contactList");
  const contacts = [];
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }
    const contact = { name, email, phone };
    contacts.push(contact);
    displayContacts();
    form.reset();
  });
  function displayContacts() {
    contactList.innerHTML = ""; 
    contacts.forEach((contact, index) => {
      const card = document.createElement("div");
      card.className = "contact-card";
      card.innerHTML = `
        <strong>${contact.name}</strong><br>
        📧 ${contact.email}<br>
        📱 ${contact.phone}
      `;
      contactList.appendChild(card);
    });
  }
});
