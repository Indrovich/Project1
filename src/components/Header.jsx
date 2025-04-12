import React from "react";

export default function Header() {
  return (
    <>
      <section className="container">
        <div className="container2">
          <h1 className="Name">Turdugulov Temirlan</h1>
          <hr />
          <h1>Contacts:</h1>
          <a href="#">✉️: turdugulovtima333@gmail.com</a> <br />
          <a href="#">📞: +996553031108</a>
          <br />``
          <p>📍: Biskek, Kyrgyzstan</p>
          <hr />
          <h2>About me:</h2>
          <p>📆: Родился: 3 ноября 2008 года</p>
          <p>🏫: Учусь в № 99 лицее</p>
          <li>Уверенный в себе, целеустремлённый и креативный</li>
          <li>Легко осваиваю новые технологии и не боюсь сложных задач</li>
          <li>Всегда стремлюсь быть лучше, чем вчера</li>
          <hr />
          <div>
            <h1>Skils:</h1>
            <p>💻: HTML, CSS, JavaScript, React </p>
            <p>💻: Занимаюсь програмированием около года</p>
            <p className="FAQ">© 2025 Темирлан. Все права защищены.</p>
          </div>
        </div>
      </section>
    </>
  );
}
