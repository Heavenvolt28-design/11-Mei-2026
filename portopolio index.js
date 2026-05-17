import express from "express";

const app = express();

const PORT = 5000;

/* =========================
   HALAMAN UTAMA
========================= */
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Portofolio Kenny Ibrahim</title>

      <style>
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
        }

        body{
          background:linear-gradient(to right,#0f172a,#1e293b);
          color:white;
        }

        .container{
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
          text-align:center;
          padding:20px;
        }

        h1{
          font-size:60px;
          color:gold;
          margin-bottom:20px;
        }

        p{
          font-size:22px;
          margin:5px 0;
        }

        .btn{
          margin-top:30px;
          padding:15px 30px;
          background:gold;
          color:black;
          border:none;
          border-radius:10px;
          font-size:18px;
          cursor:pointer;
          transition:0.3s;
        }

        .btn:hover{
          background:white;
          transform:scale(1.05);
        }

        a{
          text-decoration:none;
        }
      </style>
    </head>

    <body>

      <div class="container">
        <h1>Kenny Ibrahim</h1>

        <p>Asal : Baso</p>
        <p>Profesi : Mahasigma</p>

        <a href="/about">
          <button class="btn">
            Tentang Kenny Ibrahim
          </button>
        </a>
      </div>

    </body>
    </html>
  `);
});


/* =========================
   HALAMAN ABOUT
========================= */
app.get("/about", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>About Kenny Ibrahim</title>

      <style>
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
        }

        body{
          background:#0f172a;
          color:white;
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
          padding:20px;
        }

        .box{
          background:#1e293b;
          padding:40px;
          border-radius:20px;
          max-width:700px;
          text-align:center;
          box-shadow:0 0 20px rgba(255,255,255,0.1);
        }

        h1{
          color:gold;
          margin-bottom:20px;
          font-size:45px;
        }

        p{
          line-height:1.8;
          font-size:18px;
          margin-bottom:15px;
        }

        a{
          color:gold;
          text-decoration:none;
          font-size:18px;
        }

        a:hover{
          color:white;
        }
      </style>
    </head>

    <body>

      <div class="box">

        <h1>Tentang Kenny Ibrahim</h1>

        <p>
          Kenny Ibrahim adalah seorang Mahasigma
          yang berasal dari Baso.
        </p>

        <p>
          Ia memiliki semangat belajar tinggi
          dalam bidang teknologi, elektronika,
          pemrograman, dan pengembangan sistem IoT.
        </p>

        <p>
          Dengan tekad yang kuat, Kenny terus
          mengembangkan kemampuan untuk menjadi
          engineer yang hebat di masa depan.
        </p>

        <br>

        <a href="/">← Kembali ke Beranda</a>

      </div>

    </body>
    </html>
  `);
});


/* =========================
   MENJALANKAN SERVER
========================= */
app.listen(PORT, () => {
  console.log("Aplikasi jalan di http://localhost:5000");
});