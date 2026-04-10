'use client';

import { useEffect } from 'react';

const pageHtml = `<div class="hero">
  <h1>Algoritma Analizi</h1>
  <p>Sınav Hazırlık Rehberi — 4 Soru · Detaylı Çözüm · Alternatif Yöntemler</p>
</div>

<div class="nav">
  <button class="nav-btn active" data-q="1" onclick="show(1)">S1 · Fast Exponentiation</button>
  <button class="nav-btn" data-q="2" onclick="show(2)">S2 · Euclidean GCD</button>
  <button class="nav-btn" data-q="3" onclick="show(3)">S3 · Linear Recursion</button>
  <button class="nav-btn" data-q="4" onclick="show(4)">S4 · Tribonacci</button>
  <button class="nav-btn" data-q="5" onclick="show(5)">Özet Tablo</button>
</div>

<div class="container">

<!-- ═══════════════════════════════════════════════ SORU 1 ═══════════════════════════════════════════════ -->
<div class="section q1 active" id="s1">
  <div class="q-card">
    <h2><span class="q-num">S1</span> Binary Exponentiation — Big O Analizi</h2>
    <p>Fonksiyon: <span class="tag tag-blue">O(log n)</span> · Yöntem: Döngü Analizi · Puan: 20P</p>

    <h3>Kod</h3>
    <pre><span class="type">int</span> <span class="fn">ornek</span>(<span class="type">int</span> a, <span class="type">int</span> b) {
    <span class="type">int</span> result = <span class="num">1</span>;
    <span class="kw">while</span> (b > <span class="num">0</span>) {            <span class="cmt">// b sıfır olana kadar</span>
        <span class="kw">if</span> (b % <span class="num">2</span> == <span class="num">1</span>) {
            result *= a;        <span class="cmt">// b tek → çarp</span>
        }
        a *= a;                 <span class="cmt">// a'yı karele</span>
        b /= <span class="num">2</span>;                 <span class="cmt">// b'yi yarıla</span>
    }
    <span class="ret">return</span> result;
}</pre>

    <h3>Ne Yapıyor?</h3>
    <p>Bu algoritma <strong>a<sup>b</sup></strong> değerini hesaplar. Naif yaklaşımda b kez çarpma gerekirken, bu yöntem b'nin binary temsilini kullanarak işlem sayısını logaritmik seviyeye düşürür. Her adımda b yarılanır ve a karelenir.</p>
    <p><strong>Örnek:</strong> <span class="math">3<sup>13</sup></span> hesaplanırken → 13 = 1101₂ olduğundan sadece 4 iterasyonda sonuç bulunur.</p>

    <h3>Adım Adım Analiz</h3>

    <div class="step-row">
      <span class="step">1</span>
      <div class="step-content">
        <strong>Döngü kontrol değişkenini belirle:</strong> <code>b</code> her iterasyonda <code>b /= 2</code> ile yarılanıyor. Yani b → b/2 → b/4 → ... → 1 → 0 şeklinde iniyor.
      </div>
    </div>

    <div class="step-row">
      <span class="step">2</span>
      <div class="step-content">
        <strong>İterasyon sayısını hesapla:</strong> b'yi kaç kez 2'ye bölebiliriz? Cevap: <span class="math">⌊log₂(b)⌋ + 1</span> kez.
      </div>
    </div>

    <div class="step-row">
      <span class="step">3</span>
      <div class="step-content">
        <strong>Her iterasyondaki iş:</strong> <code>%</code>, <code>*=</code>, <code>/=</code>, karşılaştırma → hepsi <span class="tag tag-green">O(1)</span>.
      </div>
    </div>

    <div class="step-row">
      <span class="step">4</span>
      <div class="step-content">
        <strong>Toplam:</strong> <span class="math">T(b) = c · (⌊log₂(b)⌋ + 1)</span>
      </div>
    </div>

    <div class="result big-o">→ T(n) = O(log n)</div>

    <h3>Alternatif Yöntem: Tablo ile İzleme</h3>
    <div class="alt-method">
      <h4>Trace Table ile Doğrulama</h4>
      <p>Somut bir örnekle döngüyü izleyelim: <span class="math">ornek(2, 10)</span> → 2<sup>10</sup> = 1024</p>
      <table>
        <tr><th>İterasyon</th><th>b</th><th>b%2</th><th>result</th><th>a</th></tr>
        <tr><td>Başlangıç</td><td>10</td><td>—</td><td>1</td><td>2</td></tr>
        <tr><td>1</td><td>5</td><td>0</td><td>1</td><td>4</td></tr>
        <tr><td>2</td><td>2</td><td>1 → result*=4</td><td>4</td><td>16</td></tr>
        <tr><td>3</td><td>1</td><td>0</td><td>4</td><td>256</td></tr>
        <tr><td>4</td><td>0</td><td>1 → result*=256</td><td>1024</td><td>65536</td></tr>
      </table>
      <p>b=10 için <strong>4 iterasyon</strong> → ⌊log₂(10)⌋ + 1 = 3 + 1 = 4 ✓</p>
    </div>

    <div class="tip">
      <strong>💡 Sınav İpucu:</strong> "b her iterasyonda yarılanıyor → iterasyon sayısı = log₂(b)" cümlesini yazmak genellikle tam puan alır. Tablo ile doğrulamak ekstra güven verir.
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════ SORU 2 ═══════════════════════════════════════════════ -->
<div class="section q2" id="s2">
  <div class="q-card">
    <h2><span class="q-num">S2</span> Euclidean GCD — Best / Worst Case</h2>
    <p>Fonksiyon: <span class="tag tag-green">Best O(1)</span> <span class="tag tag-red">Worst O(log n)</span> · Puan: 20P</p>

    <h3>Kod</h3>
    <pre><span class="type">int</span> <span class="fn">abc</span>(<span class="type">int</span> a, <span class="type">int</span> b) {
    <span class="kw">while</span> (b != <span class="num">0</span>) {
        <span class="type">int</span> temp = b;
        b = a % b;              <span class="cmt">// kalan</span>
        a = temp;
    }
    <span class="ret">return</span> a;                   <span class="cmt">// EBOB</span>
}</pre>

    <h3>Ne Yapıyor?</h3>
    <p>Öklid algoritması ile <strong>EBOB (GCD)</strong> hesaplar. Her adımda <code>a % b</code> işlemi b'yi küçültür. Sonuçta b = 0 olunca a'daki değer EBOB'dur.</p>

    <h3>Best Case Analizi</h3>

    <div class="step-row">
      <span class="step">1</span>
      <div class="step-content">
        <strong>Koşul:</strong> <code>b == 0</code> → döngüye hiç girilmez, ya da <code>a % b == 0</code> → tek iterasyonda biter.
      </div>
    </div>
    <div class="step-row">
      <span class="step">2</span>
      <div class="step-content">
        <strong>Örnek:</strong> <code>abc(10, 5)</code> → b = 10%5 = 0 → 1 iterasyon.
      </div>
    </div>

    <div class="result best">→ Best Case: T(n) = O(1)</div>

    <h3>Worst Case Analizi</h3>

    <div class="step-row">
      <span class="step">1</span>
      <div class="step-content">
        <strong>Koşul:</strong> a ve b <strong>ardışık Fibonacci sayıları</strong> olduğunda her adımda <code>a % b = a - b</code> olur (bölüm = 1). Bu, b'nin minimum hızda küçülmesini sağlar.
      </div>
    </div>
    <div class="step-row">
      <span class="step">2</span>
      <div class="step-content">
        <strong>Örnek:</strong> <code>abc(89, 55)</code> izleyelim:
      </div>
    </div>

    <table>
      <tr><th>Adım</th><th>a</th><th>b</th><th>a % b</th></tr>
      <tr><td>1</td><td>89</td><td>55</td><td>34</td></tr>
      <tr><td>2</td><td>55</td><td>34</td><td>21</td></tr>
      <tr><td>3</td><td>34</td><td>21</td><td>13</td></tr>
      <tr><td>4</td><td>21</td><td>13</td><td>8</td></tr>
      <tr><td>5</td><td>13</td><td>8</td><td>5</td></tr>
      <tr><td>6</td><td>8</td><td>5</td><td>3</td></tr>
      <tr><td>7</td><td>5</td><td>3</td><td>2</td></tr>
      <tr><td>8</td><td>3</td><td>2</td><td>1</td></tr>
      <tr><td>9</td><td>2</td><td>1</td><td>0</td></tr>
    </table>

    <div class="step-row">
      <span class="step">3</span>
      <div class="step-content">
        <strong>Lamé Teoremi:</strong> İterasyon sayısı ≤ 2.08 · log₂(min(a,b)). Fibonacci girdileri bu üst sınıra en yakın girdilerdir.
      </div>
    </div>

    <div class="result worst">→ Worst Case: T(n) = O(log n)</div>

    <h3>Alternatif Yöntem: Amortized Azalma İspatı</h3>
    <div class="alt-method">
      <h4>İki Adımda Yarılanma Argümanı</h4>
      <p>Her <strong>iki ardışık</strong> iterasyonda b'nin değerinin en az yarıya indiğini gösterebiliriz:</p>
      <div class="math-block">
        a % b &lt; a ise ve sonraki adımda b % (a%b) &lt; b/2 <br>
        → Her 2 adımda b en az yarılanır <br>
        → Toplam adım ≤ 2 · log₂(b) <br>
        → O(log n)
      </div>
      <p>Bu ispat Fibonacci bilgisi gerektirmez, sınavda daha kolay yazılır.</p>
    </div>

    <div class="tip">
      <strong>💡 Sınav İpucu:</strong> Best case için "b sıfır veya tam bölen", worst case için "ardışık Fibonacci sayıları" anahtar kelimelerini mutlaka yazın. Lamé Teoremi'ne referans vermek ekstra puan getirir.
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════ SORU 3 ═══════════════════════════════════════════════ -->
<div class="section q3" id="s3">
  <div class="q-card">
    <h2><span class="q-num">S3</span> Lineer Recursion — T(n) Analizi</h2>
    <p>Fonksiyon: <span class="tag tag-purple">O(n)</span> · Yöntem: Substitution + Recursion Tree · Puan: 20P</p>

    <h3>Kod</h3>
    <pre><span class="type">int</span> <span class="fn">fonk</span>(<span class="type">int</span> n, <span class="type">int</span> k) {
    <span class="kw">if</span> (n == <span class="num">1</span>)
        <span class="ret">return</span> <span class="num">0</span>;
    <span class="ret">return</span> (<span class="fn">fonk</span>(n - <span class="num">1</span>, k) + k) % n;
}</pre>

    <h3>Ne Yapıyor?</h3>
    <p>Bu, <strong>Josephus problemi</strong> çözümüdür. n kişilik bir çemberde her k'ıncı kişiyi eleyerek hayatta kalanın indeksini bulur. Her çağrıda n bir azalır ve tek bir recursive çağrı yapılır.</p>

    <h3>Yöntem 1: Substitution (Yerine Koyma)</h3>

    <div class="step-row">
      <span class="step">1</span>
      <div class="step-content">
        <strong>Rekürans bağıntısı:</strong>
        <div class="math-block">T(n) = T(n-1) + c &nbsp;&nbsp;,&nbsp;&nbsp; T(1) = c₀</div>
      </div>
    </div>

    <div class="step-row">
      <span class="step">2</span>
      <div class="step-content">
        <strong>Açılım:</strong>
        <div class="math-block">
          T(n) = T(n-1) + c<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= T(n-2) + 2c<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= T(n-3) + 3c<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ...<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= T(1) + (n-1)·c<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= c₀ + (n-1)·c
        </div>
      </div>
    </div>

    <div class="result big-o">→ T(n) = O(n)</div>

    <h3>Yöntem 2: Recursion Tree</h3>
    <div class="alt-method">
      <h4>Ağaç Görselleştirmesi</h4>
      <div class="tree">fonk(n)       → c     (toplama + mod)
  │
fonk(n-1)     → c
  │
fonk(n-2)     → c
  │
  ...          ...
  │
fonk(2)       → c
  │
fonk(1)       → c₀    (base case)</div>
      <p style="margin-top:12px;">Dallanma faktörü = <strong>1</strong> (tek çocuk), derinlik = <strong>n-1</strong>. Düz zincir.</p>
      <div class="math-block">
        Toplam = Σ (i=0 → n-2) c + c₀ = (n-1)·c + c₀ = O(n)
      </div>
    </div>

    <h3>Yöntem 3: Master Theorem Uygulanabilirliği</h3>
    <div class="alt-method">
      <h4>Neden Doğrudan Uygulanamaz?</h4>
      <p>Master Theorem <span class="math">T(n) = aT(n/b) + f(n)</span> formunu gerektirir. Buradaki rekürans <span class="math">T(n) = T(n-1) + c</span> yani <strong>azaltma (subtract)</strong> formunda, <strong>bölme (divide)</strong> formunda değil. Bu yüzden Master Theorem doğrudan uygulanamaz.</p>
      <p>Ancak genelleştirilmiş form olarak: <span class="math">T(n) = T(n-1) + O(1)</span> → her zaman <span class="math">O(n)</span> olduğu bilinen bir kalıptır.</p>
    </div>

    <div class="tip">
      <strong>💡 Sınav İpucu:</strong> Bu tip sorularda substitution yöntemi en hızlı ve güvenli yoldur. 3 adımda açılım yapıp genel formülü bulmak yeterlidir. Recursion tree'yi çizim olarak eklemek görsellik açısından ek puan kazandırır.
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════ SORU 4 ═══════════════════════════════════════════════ -->
<div class="section q4" id="s4">
  <div class="q-card">
    <h2><span class="q-num">S4</span> Tribonacci Recursion — T(n) Analizi</h2>
    <p>Fonksiyon: <span class="tag tag-red">O(3ⁿ)</span> · Kesin: <span class="tag tag-yellow">Θ(1.839ⁿ)</span> · Puan: 25P</p>

    <h3>Kod</h3>
    <pre><span class="type">int</span> <span class="fn">fonksiyon</span>(<span class="type">int</span> n) {
    <span class="kw">if</span> (n == <span class="num">0</span>) <span class="ret">return</span> <span class="num">0</span>;
    <span class="kw">if</span> (n == <span class="num">1</span>) <span class="ret">return</span> <span class="num">1</span>;
    <span class="kw">if</span> (n == <span class="num">2</span>) <span class="ret">return</span> <span class="num">2</span>;
    <span class="ret">return</span> <span class="fn">fonksiyon</span>(n-<span class="num">1</span>) + <span class="fn">fonksiyon</span>(n-<span class="num">2</span>) + <span class="fn">fonksiyon</span>(n-<span class="num">3</span>);
}</pre>

    <h3>Ne Yapıyor?</h3>
    <p>Tribonacci dizisi hesaplar — Fibonacci'nin 3 terimli versiyonu. Her eleman kendinden önceki üç elemanın toplamıdır. Memoization kullanılmadığı için aynı alt problemler defalarca çözülür.</p>

    <h3>Yöntem 1: Recursion Tree</h3>

    <div class="step-row">
      <span class="step">1</span>
      <div class="step-content">
        <strong>Rekürans bağıntısı:</strong>
        <div class="math-block">T(n) = T(n-1) + T(n-2) + T(n-3) + c &nbsp;&nbsp;,&nbsp;&nbsp; T(0)=T(1)=T(2)=c₀</div>
      </div>
    </div>

    <div class="step-row">
      <span class="step">2</span>
      <div class="step-content">
        <strong>Ağaç yapısı:</strong>
        <div class="tree">                      fonk(n)                         maliyet: c
                    /       |       \
             fonk(n-1)  fonk(n-2)  fonk(n-3)        maliyet: 3c
            /   |   \
         ...   ...   ...                             maliyet: ≤ 9c
         ...                                         maliyet: ≤ 27c
          |
     base cases                                      maliyet: c₀</div>
      </div>
    </div>

    <div class="step-row">
      <span class="step">3</span>
      <div class="step-content">
        <strong>Üst sınır:</strong> Her düğüm 3 çocuk doğuruyor. Derinlik en fazla n. Her seviyede en fazla 3<sup>i</sup> düğüm var.
        <div class="math-block">
          T(n) ≤ Σ (i=0 → n) 3ⁱ · c = c · (3ⁿ⁺¹ - 1) / 2
        </div>
      </div>
    </div>

    <div class="result big-o">→ Üst Sınır: T(n) = O(3ⁿ)</div>

    <div class="step-row">
      <span class="step">4</span>
      <div class="step-content">
        <strong>Alt sınır:</strong> En kısa dallar n/3 derinlikte base case'e ulaşır. Her çağrıda en az 3 alt çağrı yapıldığından:
        <div class="math-block">T(n) ≥ 3 · T(n-3) → T(n) ≥ 3^(n/3) → T(n) = Ω(3^(n/3))</div>
      </div>
    </div>

    <h3>Yöntem 2: Karakteristik Denklem</h3>
    <div class="alt-method">
      <h4>Kesin Asimptotik Çözüm</h4>
      <div class="step-row">
        <span class="step">1</span>
        <div class="step-content">
          Reküranstan karakteristik denklem: <span class="math">x³ = x² + x + 1</span>
        </div>
      </div>
      <div class="step-row">
        <span class="step">2</span>
        <div class="step-content">
          Düzenleme: <span class="math">x³ − x² − x − 1 = 0</span>
        </div>
      </div>
      <div class="step-row">
        <span class="step">3</span>
        <div class="step-content">
          En büyük pozitif reel kök: <span class="math">r ≈ 1.839</span> (Tribonacci sabiti)
        </div>
      </div>
      <div class="step-row">
        <span class="step">4</span>
        <div class="step-content">
          Genel çözüm baskın terimden gelir:
          <div class="math-block">T(n) = Θ(1.839ⁿ)</div>
        </div>
      </div>
      <p>Not: 1.839ⁿ, 3ⁿ'den çok daha yavaş büyür. Yani O(3ⁿ) doğru ama gevşek bir üst sınırdır.</p>
    </div>

    <h3>Yöntem 3: Substitution ile Üst Sınır İspatı</h3>
    <div class="alt-method">
      <h4>T(n) ≤ 3ⁿ olduğunu ispatlayalım (Tümevarım)</h4>
      <p><strong>Tümevarım hipotezi:</strong> T(k) ≤ 3ᵏ, tüm k &lt; n için.</p>
      <div class="math-block">
        T(n) = T(n-1) + T(n-2) + T(n-3) + c<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≤ 3ⁿ⁻¹ + 3ⁿ⁻² + 3ⁿ⁻³ + c<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3ⁿ⁻³ · (3² + 3 + 1) + c<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 3ⁿ⁻³ · 13 + c<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;≤ 3ⁿ⁻³ · 27 = 3ⁿ &nbsp;&nbsp; ✓ &nbsp; (13 &lt; 27)
      </div>
      <p>Tümevarım tamamlandı → <span class="math">T(n) = O(3ⁿ)</span></p>
    </div>

    <div class="tip">
      <strong>💡 Sınav İpucu:</strong> Recursion tree + üst sınır O(3ⁿ) yazmak 25P'nin büyük bölümünü alır. Karakteristik denklem ile Θ(1.839ⁿ) yazmak tam puan için yeterli. Substitution ile tümevarım ispatı en güçlü cevaptır.
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════ ÖZET ═══════════════════════════════════════════════ -->
<div class="section" id="s5">
  <div class="q-card" style="border-top: 3px solid var(--yellow);">
    <h2 style="color: var(--yellow);">📊 Karşılaştırmalı Özet Tablo</h2>

    <div class="summary-grid">
      <div class="summary-item" style="border-left: 3px solid var(--accent1);">
        <h4>Soru 1</h4>
        <div class="big" style="color: var(--accent1);">O(log n)</div>
        <div class="label">Binary Exponentiation · Döngü analizi</div>
      </div>
      <div class="summary-item" style="border-left: 3px solid var(--accent2);">
        <h4>Soru 2</h4>
        <div class="big" style="color: var(--accent2);">O(1) — O(log n)</div>
        <div class="label">Euclidean GCD · Best/Worst case</div>
      </div>
      <div class="summary-item" style="border-left: 3px solid var(--accent3);">
        <h4>Soru 3</h4>
        <div class="big" style="color: var(--accent3);">O(n)</div>
        <div class="label">Lineer Recursion · Substitution</div>
      </div>
      <div class="summary-item" style="border-left: 3px solid var(--accent4);">
        <h4>Soru 4</h4>
        <div class="big" style="color: var(--accent4);">O(3ⁿ)</div>
        <div class="label">Tribonacci · Recursion tree</div>
      </div>
    </div>

    <h3>Tam Karşılaştırma Tablosu</h3>
    <table>
      <tr>
        <th>Soru</th>
        <th>Algoritma</th>
        <th>Rekürans</th>
        <th>Karmaşıklık</th>
        <th>En İyi Yöntem</th>
        <th>Alternatif</th>
      </tr>
      <tr>
        <td><span class="tag tag-blue">S1</span></td>
        <td>Fast Exponentiation</td>
        <td>Döngü: b /= 2</td>
        <td style="color: var(--accent1); font-weight: 700;">O(log n)</td>
        <td>Döngü analizi</td>
        <td>Trace table</td>
      </tr>
      <tr>
        <td><span class="tag tag-orange">S2</span></td>
        <td>Euclidean GCD</td>
        <td>Döngü: a % b</td>
        <td style="font-weight: 700;"><span style="color:var(--green)">O(1)</span> / <span style="color:var(--red)">O(log n)</span></td>
        <td>Lamé teoremi</td>
        <td>2-adım yarılanma ispatı</td>
      </tr>
      <tr>
        <td><span class="tag tag-purple">S3</span></td>
        <td>Josephus (Lineer)</td>
        <td>T(n) = T(n-1) + c</td>
        <td style="color: var(--accent3); font-weight: 700;">O(n)</td>
        <td>Substitution</td>
        <td>Recursion tree</td>
      </tr>
      <tr>
        <td><span class="tag tag-green">S4</span></td>
        <td>Tribonacci</td>
        <td>T(n) = T(n-1) + T(n-2) + T(n-3)</td>
        <td style="color: var(--red); font-weight: 700;">O(3ⁿ) / Θ(1.839ⁿ)</td>
        <td>Recursion tree</td>
        <td>Karakteristik denklem, Tümevarım</td>
      </tr>
    </table>

    <h3>Yöntem Seçim Rehberi</h3>
    <table>
      <tr><th>Rekürans Tipi</th><th>Önerilen Yöntem</th><th>Neden?</th></tr>
      <tr>
        <td>Döngü (iteratif)</td>
        <td><span class="tag tag-blue">Döngü Analizi</span></td>
        <td>Kontrol değişkeninin nasıl değiştiğine bak: yarılanma → log, birer azalma → n</td>
      </tr>
      <tr>
        <td>T(n) = T(n-1) + f(n)</td>
        <td><span class="tag tag-purple">Substitution</span></td>
        <td>Açılım yap, seriyi topla. En hızlı ve güvenli yöntem</td>
      </tr>
      <tr>
        <td>T(n) = aT(n/b) + f(n)</td>
        <td><span class="tag tag-orange">Master Theorem</span></td>
        <td>Bölme formundaki reküranslar için. 3 case'den birini uygula</td>
      </tr>
      <tr>
        <td>Çoklu dallanma</td>
        <td><span class="tag tag-green">Recursion Tree</span></td>
        <td>Ağaçtaki toplam düğüm sayısını hesapla. Görsel ve sezgisel</td>
      </tr>
      <tr>
        <td>Kesin çözüm gerekiyorsa</td>
        <td><span class="tag tag-yellow">Karakteristik Denklem</span></td>
        <td>xⁿ formunda çöz, baskın kökü bul → Θ notasyonu</td>
      </tr>
    </table>

    <h3>Büyüme Hızı Karşılaştırması</h3>
    <table>
      <tr><th>n</th><th>O(1)</th><th>O(log n)</th><th>O(n)</th><th>O(1.839ⁿ)</th><th>O(3ⁿ)</th></tr>
      <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>
      <tr><td>5</td><td>1</td><td>2</td><td>5</td><td>21</td><td>243</td></tr>
      <tr><td>10</td><td>1</td><td>3</td><td>10</td><td>357</td><td>59,049</td></tr>
      <tr><td>20</td><td>1</td><td>4</td><td>20</td><td>127,482</td><td>3.5 × 10⁹</td></tr>
      <tr><td>50</td><td>1</td><td>6</td><td>50</td><td>≈ 10¹³</td><td>≈ 10²³</td></tr>
    </table>
    <p style="color: var(--text-dim); font-size: 0.85rem; margin-top: 8px;">
      Bu tablo sınavda "neden Tribonacci'nin memoization'a ihtiyacı var?" sorusuna somut kanıt olarak gösterilebilir.
    </p>

    <div class="tip" style="margin-top: 24px;">
      <strong>💡 Genel Sınav Stratejisi:</strong><br>
      1) Önce kodu oku ve ne yaptığını anla (1 dk)<br>
      2) Rekürans bağıntısını yaz — doğru bağıntı puanın yarısıdır<br>
      3) En rahat olduğun yöntemi uygula (substitution genelde en güvenli)<br>
      4) Sonucu Big-O notasyonuyla yaz<br>
      5) Varsa trace table/örnek ile doğrula (kısmi puan garantisi)
    </div>
  </div>
</div>

</div>`;

export default function HomePage() {
  useEffect(() => {
    window.show = function show(n) {
      document.querySelectorAll('.section').forEach((section) => section.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach((button) => button.classList.remove('active'));

      const activeSection = document.getElementById('s' + n);
      const activeButton = document.querySelector('[data-q="' + n + '"]');

      if (activeSection) activeSection.classList.add('active');
      if (activeButton) activeButton.classList.add('active');

      window.scrollTo({ top: 240, behavior: 'smooth' });
    };

    return () => {
      delete window.show;
    };
  }, []);

  return <main dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
