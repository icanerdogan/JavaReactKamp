<h1> SQL DESIGN </h1>

<ul>
  <li><b> İş Arayanlar (jobSeekers)</b></li> 
    <p>Kullanıcıdan ad, soyad, tcno, doğum yılı, e-Posta, şifre bilgilerini tutacak alanlar oluşturuldu</p>
    <ul>
      <li><b>Mernis Doğrulma Tablosu (mernis)</b></li>
      <p>Burada İş Arayan ID numarası ile Merniste Aynı ID numarası ile tutulup aynı kişi olduğunun doğrulanması sağlanacak</p>
      <p>Birebir bir bağlantı ile kişi ID'leri 2 tabloda da tekrarlanması önlendi</p>
      <li><b>İş Arayan E-mailleri (emailJobSeekers)</b></li>
      <p>Burada kişi emailleri farklı ID'lere taşınarak birebir bir bağlantı ile herkesin kendisine özgü bir email alma işlemi sağlanmış oldu.</p>
      <li><b>İş Arayan TC Kimlik Numaraları (nationalityNumber)</b></li>
      <p>Tabloda TC Kimlik numaraları herkesin farklı olacağından dolayı PRIMARY KEY olacak atandığı, sadece TC Kimlik numaralının tutulacağı alan oluşturuldu</p>
    </ul>  
  <li><b> İş Verenler (employers) </b></li> 
    <ul>
      <li><b>İş Veren E-mailleri & Doğrulaması (emailEmployers) </b></li>
      <p>İş verenler maillerini ve bu maillerin aynı zamanda doğrulandığını bir tabloda birleşitirerek aynı anda görmüş olduk. </p>
      <p>Şirket domainleri aynı olsa da emiller farklı olacağından dolayı birebir bir bağlantı tercih ettim.</p>
      <li><b>İş Veren HMRS Durumları (hrms) </b></li>
      <p> Burada HrmsState Boolean veri tipiyle doğrulama oldu veya olmadı şeklinde tuttum.(Şekilde boolean olarak verilmemiş anacak veri tipi boolean olması gerekir)</p>
    </ul> 
  <li><b> İş Pozisyonları (positions) </b></li> 
  <p>Pozisyon adımız ve ID numarası ile bu tabloada sadece bu iki değer tutulur.</p>
</ul> 
<br>  
<img src = "https://raw.githubusercontent.com/icanerdogan/JavaReactKamp/master/6%20-%20Çok%20Katmanlı%20Kurumsal%20Mimariler/ODEV/1%20-%20HRMS%20SQL%20Design/HRMS%20SQL%20DESIGN.PNG"></img>
