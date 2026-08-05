const commissionForm = document.querySelector("#commission-form");

commissionForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(commissionForm);
  const subject = `委託詢問｜${data.get("service")}｜${data.get("name")}`;
  const body = [
    "您好，我想提出客製委託：",
    "",
    `姓名：${data.get("name")}`,
    `聯絡方式：${data.get("contact")}`,
    `委託服務：${data.get("service")}`,
    `需求說明：${data.get("request")}`,
    "",
    "我已閱讀並同意隱私權說明、委託確認事項與退換貨政策。",
    "我已確認 50% 訂金與兩段式收款方式（最終報價未達 NT$1,000 者採全額付款）。",
    "我了解本委託屬依我要求所為之客製化給付，依法不適用七日無條件解除權。",
    "我會於此信附上照片原檔，供工作室評估。",
  ].join("\n");

  window.location.href = `mailto:charlesree826@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const SUPPORT_MAILBOX = "charlesree826@gmail.com";
const supportForm = document.querySelector("#support-form");
const supportOut = document.querySelector("#support-out");
const supportText = document.querySelector("#support-text");
const supportMail = document.querySelector("#support-mail");
const supportCopied = document.querySelector("#support-copied");

supportForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(supportForm);
  const subject = `客服詢問｜${data.get("topic")}｜${data.get("name")}`;
  const body = [
    "您好，我想聯絡工作室客服：",
    "",
    `姓名或稱呼：${data.get("name")}`,
    `電子信箱：${data.get("email")}`,
    `問題類型：${data.get("topic")}`,
    `委託項目或訂單編號：${data.get("order") || "（未填）"}`,
    "",
    "問題說明：",
    `${data.get("message")}`,
  ].join("\n");

  supportText.value = [`收件信箱：${SUPPORT_MAILBOX}`, `主旨：${subject}`, "", body].join("\n");
  supportMail.href = `mailto:${SUPPORT_MAILBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  supportCopied.textContent = "";
  supportOut.classList.add("on");
  supportOut.scrollIntoView({ block: "center" });
});

document.querySelector("#support-copy")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(supportText.value);
    supportCopied.textContent = `已複製，請寄至 ${SUPPORT_MAILBOX}`;
  } catch {
    supportText.focus();
    supportText.select();
    supportCopied.textContent = "已選取全文，請按 ⌘C（Windows 為 Ctrl+C）複製後寄出。";
  }
});
