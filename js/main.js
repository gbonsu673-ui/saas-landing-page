"use strict";

const faqContainer = document.querySelector(".faq-content");

faqContainer.addEventListener("click", function (e) {
  const groupHeader = e.target.closest(".faq-group-header");

  if (!groupHeader) return;

  const group = groupHeader.parentElement;
  const groupBody = group.querySelector(".faq-group-body");
  const icon = groupHeader.querySelector("i");

  // Toggle icon
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-minus");

  // Toggle visibility of body
  groupBody.classList.toggle("open");

  // Close other open FAQ bodies
  const otherGroups = faqContainer.querySelectorAll(".faq-group");
  otherGroups.forEach(function (item) {
    if (item !== group) {
      const otherGroupBody = item.querySelector(".faq-group-body");
      const otherGroupIcon = item.querySelector(".faq-group-header i");

      otherGroupBody.classList.remove("open");
      otherGroupIcon.classList.remove("fa-minus");
      otherGroupIcon.classList.add("fa-plus");
    }
  });
});
