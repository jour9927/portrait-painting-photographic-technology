const MAILBOX = "charlesree826@gmail.com";

// 產生信件內容而不自動跳轉 mailto：沒有設定郵件程式的裝置按下去會毫無反應，
// 因此一律先顯示完整內容，再讓使用者選擇用郵件程式開啟或自行複製寄出。
function wireMailForm(prefix, build) {
  const form = document.querySelector(`#${prefix}-form`);
  if (!form) return;

  const out = document.querySelector(`#${prefix}-out`);
  const text = document.querySelector(`#${prefix}-text`);
  const mail = document.querySelector(`#${prefix}-mail`);
  const copied = document.querySelector(`#${prefix}-copied`);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { subject, body } = build(new FormData(form));

    text.value = [`收件信箱：${MAILBOX}`, `主旨：${subject}`, "", body].join("\n");
    mail.href = `mailto:${MAILBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    copied.textContent = "";
    out.classList.add("on");
    out.scrollIntoView({ block: "center" });
  });

  document.querySelector(`#${prefix}-copy`)?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text.value);
      copied.textContent = `已複製，請寄至 ${MAILBOX}`;
    } catch {
      text.focus();
      text.select();
      copied.textContent = "已選取全文，請按 ⌘C（Windows 為 Ctrl+C）複製後寄出。";
    }
  });
}

wireMailForm("commission", (data) => ({
  subject: `委託詢問｜${data.get("service")}｜${data.get("name")}`,
  body: [
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
  ].join("\n"),
}));

wireMailForm("support", (data) => ({
  subject: `客服詢問｜${data.get("topic")}｜${data.get("name")}`,
  body: [
    "您好，我想聯絡工作室客服：",
    "",
    `姓名或稱呼：${data.get("name")}`,
    `電子信箱：${data.get("email")}`,
    `問題類型：${data.get("topic")}`,
    `委託項目或訂單編號：${data.get("order") || "（未填）"}`,
    "",
    "問題說明：",
    `${data.get("message")}`,
  ].join("\n"),
}));
