import { Seo } from "./components/Seo"; // путь поправь под свой файл

export function DriverPage() {
  return (
    <>
      <Seo
        title="Ремонт и обслуживание такси — TaxiUp"
        description="Ремонт такси, обслуживание, подготовка под тарифы. Оставьте заявку — перезвоним и рассчитаем стоимость."
        path="/"
      />
      {/* остальная верстка */}
    </>
  );
}
