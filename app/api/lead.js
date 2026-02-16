module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    let body = req.body || {};
    if (typeof body === "string") body = JSON.parse(body || "{}");

    const {
      name = "",
      phone = "",
      car = "",
      year = "",
      segment = "",
      message = "",
      source = "",
      hp = ""
    } = body;

    // антиспам
    if (hp && String(hp).trim() !== "") {
      return res.status(200).json({ ok: true });
    }

    const text =
`🚕 Новая заявка
👤 Имя: ${name || "—"}
📞 Телефон: ${phone || "—"}
🚗 Авто: ${car || "—"} ${year || ""}
👥 Тип: ${segment || "—"}
📝 Комментарий: ${message || "—"}
🔗 Страница: ${source || "—"}
⏰ ${new Date().toLocaleString("ru-RU")}`;

    const token = process.env.TG_BOT_TOKEN;
    const chatId = process.env.TG_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ ok: false, error: "Missing TG env vars" });
    }

    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      return res.status(500).json({ ok: false, error: err });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
};
